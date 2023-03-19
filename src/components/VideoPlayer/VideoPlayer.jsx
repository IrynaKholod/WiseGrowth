import Hls from 'hls.js';

export const VideoPlayer = (link, videoElement, startPosition, playbackRate) => {
  let hls = null;
  if (Hls.isSupported()) {
    hls = new Hls({ startPosition: startPosition });
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log('video and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level'
      );
    });
    hls.loadSource(`${link}`);
    // bind them together
    hls.attachMedia(videoElement);

    // Add playback rate functionality
    if (playbackRate) {
      videoElement.playbackRate = playbackRate;
    }
  }
  return hls;
};




