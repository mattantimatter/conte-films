/** Keep captions available in the player menu, but never auto-show them. */
export function disableVideoTextTracks(video: HTMLVideoElement) {
  const disable = () => {
    const tracks = video.textTracks;
    for (let i = 0; i < tracks.length; i += 1) {
      tracks[i].mode = "disabled";
    }
  };

  disable();
  video.addEventListener("loadedmetadata", disable);
  video.addEventListener("loadeddata", disable);
  // iOS Safari often flips the first captions track on at play time.
  video.addEventListener("play", disable);

  return () => {
    video.removeEventListener("loadedmetadata", disable);
    video.removeEventListener("loadeddata", disable);
    video.removeEventListener("play", disable);
  };
}
