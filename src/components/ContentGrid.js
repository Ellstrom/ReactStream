import React, { useContext } from 'react'
import { FilterContext } from "./FilterContext";
import { VideoPlayer } from "./VideoPlayer";
import { VideoConfig } from "../configurations/VideoConfig"

const ContentGrid = (props) => {

    const videoConfig = VideoConfig;

    const {
        searchContent,
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
        if(getVideoUrlOrHidden(video) !== "hidden"){
            videoList.push(<VideoPlayer key={video.videoNumber} videoUrl={getVideoUrlOrHidden(video)}/>)
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
                    <h2>No content, try to change the filter! <br/> If you think a certain video should belong here, send it as feedback :) <br/> <a href="mailto:ellstream44@hotmail.com">ellstream44@hotmail.com</a></h2>
                </div>
            )}
        </div>
    );

    function getVideoUrlOrHidden(video){
        if(isVisible(video)){
            return video.videoUrl;
        }else{
            return "hidden";
        }
    }

    function isVisible(video){
        return !!(searchContentMatches(video.name)
            && mapNameMatches(video.mapName)
            && utilityMatches(video.type)
            && teamMatches(video.team)
            && locationMatches(video.location));
    }

    function mapNameMatches(mapName){
        return mapName === props.mapName;
    }

    function searchContentMatches(videoName){
        return (videoName.toLowerCase().includes(searchContent.toLowerCase())
            || (searchContent === ''));
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