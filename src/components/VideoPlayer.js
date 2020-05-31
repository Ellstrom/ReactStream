import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = (props) => {
    return(
        <div>
            {props.videoUrl !== "hidden" &&
                <div>
                    <ReactPlayer
                        controls
                        url={props.videoUrl}
                    />
                </div>
            }
        </div>
    )
}