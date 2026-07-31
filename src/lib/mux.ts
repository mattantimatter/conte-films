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
  if (project.videoSource?.type === "mux") {
    return muxPosterUrl(project.videoSource.url);
  }
  return project.posterImage;
}
