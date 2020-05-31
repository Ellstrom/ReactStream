import React, { useContext } from 'react'
import { FilterContext } from "./FilterContext";
import { VideoPlayer } from "./VideoPlayer";
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
        isRampVisible,
        isVentVisible
    } = useContext(FilterContext);

    const videoList = [];

    for (const [, video] of videoConfig.videos.entries()) {
        if(getVideoIdOrHidden(video) !== "hidden"){
            videoList.push(<VideoPlayer key={video.videoNumber} videoId={getVideoIdOrHidden(video)}/>)
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
            || (location.isRamp && isRampVisible)
            || (location.isVent && isVentVisible))
            || (!isAVisible
                && !isMidVisible
                && !isBVisible
                && !isYardVisible
                && !isRampVisible
                && !isVentVisible));
    }

};

export default ContentGrid;