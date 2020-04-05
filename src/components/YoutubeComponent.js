import React from 'react';
import YouTube from 'react-youtube';

class YoutubeComponent extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };

        if(this.props.videoId !== "hidden"){
            return <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
        }else{
            return null;
        }
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default YoutubeComponent;