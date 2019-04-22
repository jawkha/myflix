import React, { Component } from 'react';

class VideoPlayer extends Component {
  state = {};
  render() {
    return (
      <div id="video-player">
        <iframe
          id="video-player"
          title="youtube-player"
          type="text/html"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
        />
      </div>
    );
  }
}

export default VideoPlayer;
