import React, {useContext, useMemo, useState} from 'react'
import { FilterContext } from "./FilterContext";
import YoutubeComponent from "./YoutubeComponent";
import { VideoConfig } from "../configurations/VideoConfig"

const ContentGrid = (props) => {

    const videoConfig = VideoConfig;

    const {
        isSmokeVisible,
        isFlashVisible,
        isMolotovVisible,
        isGrenadeVisible,
        isCTVisible,
        isTVisible,
        isStratVisible,
        isAVisible,
        isMidVisible,
        isBVisible,
        isYardVisible,
        isRampVisible
    } = useContext(FilterContext);

    const videoList = [];

    for (const [index, value] of videoConfig.videos.entries()) {
        if(getVideoIdOrHidden(value) !== "hidden"){
            videoList.push(<YoutubeComponent videoId={getVideoIdOrHidden(value)}/>)
        }
    }

    return (
        <div>
            {(videoList.length > 0) ? (
                <div className="grid-container-videos">
                    {videoList}
                </div>
            ) : (
                <div>
                    <h2>No content :( <br/> Try to change the filter!</h2>
                </div>
            )}
        </div>
    );

    function getVideoIdOrHidden(video){
        if(isVisible(video)){
            return video.videoId;
        }else{
            return "hidden";
        }
    }

    function isVisible(video){
        return !!(mapNameMatches(video.mapName)
            && utilityMatches(video.type)
            && teamMatches(video.team)
            && locationMatches(video.location));
    }

    function mapNameMatches(mapName){
        return mapName === props.mapName;
    }

    function utilityMatches(type){
        return !!(((type.isSmoke && isSmokeVisible)
            || (type.isFlash && isFlashVisible)
            || (type.isMolotov && isMolotovVisible)
            || (type.isGrenade && isGrenadeVisible))
            || (type.isStrat && isStratVisible)
            || (!isSmokeVisible
                && !isFlashVisible
                && !isMolotovVisible
                && !isGrenadeVisible
                && !isStratVisible));
    }

    function teamMatches(team){
        return !!(((team.isCT && isCTVisible)
            || (team.isT && isTVisible))
            || (!isCTVisible
                && !isTVisible));
    }

    function locationMatches(location){
        return !!(((location.isA && isAVisible)
            || (location.isMid && isMidVisible)
            || (location.isB && isBVisible)
            || (location.isYard && isYardVisible)
            || (location.isRamp && isRampVisible))
            || (!isAVisible
                && !isMidVisible
                && !isBVisible
                && !isYardVisible
                && !isRampVisible));
    }

};

export default ContentGrid;