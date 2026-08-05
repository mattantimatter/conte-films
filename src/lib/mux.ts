// `min_resolution=720p` strips the blurry 270p–540p renditions from the
// manifest entirely, and `rendition_order=desc` puts 1080p first so it is the
// level players start on.
export function muxStreamUrl(playbackId: string) {
  return (
    `https://stream.mux.com/${playbackId}.m3u8` +
    `?min_resolution=720p` +
    `&max_resolution=1080p` +
    `&rendition_order=desc`
  );
}

export function muxPosterUrl(playbackId: string, width = 1280) {
  return `https://image.mux.com/${playbackId}/thumbnail.webp?time=1&width=${width}`;
}

export function projectPosterSrc(project: {
  posterImage: string;
  videoSource?: { type: string; url: string };
}) {
  // Prefer the explicit poster (local stills, curated Mux frames, etc.).
  if (project.posterImage) {
    return project.posterImage;
  }
  if (project.videoSource?.type === "mux") {
    return muxPosterUrl(project.videoSource.url);
  }
  return "";
}
