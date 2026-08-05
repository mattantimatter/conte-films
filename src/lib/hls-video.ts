import type Hls from "hls.js";
import type { HlsConfig } from "hls.js";

const NATIVE_HLS_MIME = "application/vnd.apple.mpegurl";

const PROFILES = {
  /** Full-bleed hero reels and the lightbox player: top rendition, deep buffer. */
  feature: {
    capLevelToPlayerSize: false,
    // Seed the bandwidth estimate high so the first segment request goes to the
    // best rendition. `rendition_order=desc` makes level 0 the highest.
    abrEwmaDefaultEstimate: 50_000_000,
    startLevel: 0,
    maxBufferLength: 60,
    maxMaxBufferLength: 120,
  },
  /** Hover previews on project cards: cheap to start, sized to the card. */
  preview: {
    capLevelToPlayerSize: true,
    abrEwmaDefaultEstimate: 2_000_000,
    maxBufferLength: 10,
    maxMaxBufferLength: 20,
  },
} satisfies Record<string, Partial<HlsConfig>>;

export interface AttachHlsOptions {
  profile?: keyof typeof PROFILES;
  /** Fired when the stream is attached and playback can be requested. */
  onReady?: () => void;
}

/**
 * Point a video element at a Mux HLS stream. Returns a cleanup function.
 *
 * hls.js is tried first wherever Media Source Extensions work, and native HLS
 * is only a fallback for Safari. Feature-detecting the native path first looks
 * reasonable, but Edge on Windows and recent Chrome builds answer "maybe" to
 * `canPlayType("application/vnd.apple.mpegurl")` and then fail to render the
 * stream, which leaves the poster frame up with no way to recover.
 */
export function attachHlsStream(
  video: HTMLVideoElement,
  streamUrl: string,
  { profile = "feature", onReady }: AttachHlsOptions = {}
): () => void {
  let cancelled = false;
  let instance: Hls | null = null;

  const ready = () => {
    if (!cancelled) onReady?.();
  };

  const playNative = () => {
    if (cancelled || !video.canPlayType(NATIVE_HLS_MIME)) return;
    video.src = streamUrl;
    video.addEventListener("loadedmetadata", ready, { once: true });
    ready();
  };

  import("hls.js")
    .then(({ default: HlsCtor }) => {
      if (cancelled) return;

      if (!HlsCtor.isSupported()) {
        playNative();
        return;
      }

      const hls = new HlsCtor(PROFILES[profile]);
      instance = hls;

      hls.on(HlsCtor.Events.MANIFEST_PARSED, ready);

      let mediaRecoveries = 0;
      hls.on(HlsCtor.Events.ERROR, (_event, data) => {
        // Non-fatal errors are retried internally by hls.js.
        if (!data.fatal || cancelled) return;

        if (data.type === HlsCtor.ErrorTypes.NETWORK_ERROR) {
          hls.startLoad();
          return;
        }

        if (data.type === HlsCtor.ErrorTypes.MEDIA_ERROR && mediaRecoveries < 2) {
          mediaRecoveries += 1;
          hls.recoverMediaError();
          return;
        }

        hls.destroy();
        instance = null;
        playNative();
      });

      hls.loadSource(streamUrl);
      hls.attachMedia(video);
    })
    .catch(playNative);

  return () => {
    cancelled = true;
    video.removeEventListener("loadedmetadata", ready);
    instance?.destroy();
    instance = null;
  };
}
