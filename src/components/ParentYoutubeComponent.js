import React from 'react';
import YoutubeComponent from "./YoutubeComponent";

class ParentYoutubeComponent extends React.Component {
    render() {
        if(this.props.videoId1 !== "hidden" && this.props.videoId2 !== "hidden"){
            return (
                <tr>
                    <td>
                        <YoutubeComponent videoId={this.props.videoId1}/>
                    </td>
                    <td>
                        <YoutubeComponent videoId={this.props.videoId2}/>
                    </td>
                </tr>
            )
        }else if(this.props.videoId1 !== "hidden"){
            return (
                <tr>
                    <td>
                        <YoutubeComponent videoId={this.props.videoId1}/>
                    </td>
                </tr>
            )
        }else{
            return null;
        }
    }
}

export default ParentYoutubeComponent;