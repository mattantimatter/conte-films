"use client";

import { useEffect, useRef, useState } from "react";
import { attachHlsStream } from "@/lib/hls-video";

const GESTURES = ["pointerdown", "keydown", "touchstart"] as const;

/**
 * Drives the muted, looping background reels (heroes and feature cards).
 *
 * Returns the ref to attach to the `<video>` and a `playing` flag that stays
 * false until real frames are on screen, so the poster can hold until then.
 */
export function useAmbientVideo(streamUrl: string | null, threshold = 0.1) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !streamUrl) return;

    // React's `muted` prop doesn't set the HTML attribute — do it directly.
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    let onScreen = true;
    let gestureRetryBound = false;
    let revealTimer = 0;

    const startPlay = () => {
      if (!onScreen) return;
      video.play().then(unbindGestureRetry, bindGestureRetry);
    };

    // Autoplay is still refusable even when muted — Edge's "Limit media
    // autoplay" setting and battery saver modes both reject it — so fall back
    // to starting on the visitor's first interaction with the page.
    const bindGestureRetry = () => {
      if (gestureRetryBound) return;
      gestureRetryBound = true;
      for (const type of GESTURES) {
        window.addEventListener(type, startPlay, { passive: true });
      }
    };

    const unbindGestureRetry = () => {
      if (!gestureRetryBound) return;
      gestureRetryBound = false;
      for (const type of GESTURES) {
        window.removeEventListener(type, startPlay);
      }
    };

    const onPlaying = () => {
      window.clearTimeout(revealTimer);
      revealTimer = window.setTimeout(() => setPlaying(true), 500);
    };
    video.addEventListener("playing", onPlaying);

    const detach = attachHlsStream(video, streamUrl, { onReady: startPlay });

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) startPlay();
        else video.pause();
      },
      { threshold }
    );
    observer.observe(video);

    return () => {
      window.clearTimeout(revealTimer);
      video.removeEventListener("playing", onPlaying);
      unbindGestureRetry();
      observer.disconnect();
      detach();
    };
  }, [streamUrl, threshold]);

  return { videoRef, playing };
}
