import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = (props) => {
    const videoUrl = 'https://www.youtube.com/watch?v='+props.videoId
    return(
        <div>
            {props.videoId !== "hidden" &&
                <div>
                    <ReactPlayer
                        controls
                        url={videoUrl}
                    />
                </div>
            }
        </div>
    )
}