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
        isBVisible
    } = useContext(FilterContext);

    return (
        <div>
            <div className="grid-container-videos">
                {this.state.data_execute_1.isExpanded ? (
                    <FixaLogikFörAttEndastBehövaKonfaUppIConfigFilen size='1.5rem'/>
                ) : (
                    <FaAngleDown size='1.5rem'/>
                )}

                <YoutubeComponent videoId={getVideoIdOrHidden(videoConfig.videos.video_80)}/>
                <YoutubeComponent videoId={getVideoIdOrHidden(videoConfig.videos.video_82)}/>
                <YoutubeComponent videoId={getVideoIdOrHidden(videoConfig.videos.video_96)}/>

            </div>
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
            || (location.isB && isBVisible))
            || (!isAVisible
                && !isMidVisible
                && !isBVisible));
    }

};

export default ContentGrid;