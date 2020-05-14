import React, {useContext, useMemo, useState} from 'react'
import { Table } from "react-bootstrap";
import { FaAngleDown, FaAngleUp} from 'react-icons/fa';
import ParentYoutubeComponent from "./ParentYoutubeComponent";
import { Container, Row, Col } from "react-bootstrap";
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

    const showEveryThing = (
        !isSmokeVisible
        && !isFlashVisible
        && !isMolotovVisible
        && !isGrenadeVisible
        && !isCTVisible
        && !isTVisible
        && !isStratVisible
        && !isAVisible
        && !isMidVisible
        && !isBVisible
    );

    return (
        <div>
            <div className="grid-container-videos">
                {/*
                <YoutubeComponent visible={ showEveryThing || isSmokeVisible } videoId={props.props.executes.execute_1.videoIds.videoId1}/>
                <YoutubeComponent visible={ showEveryThing || isSmokeVisible } videoId={props.props.executes.execute_1.videoIds.videoId2}/>
                <YoutubeComponent visible={ showEveryThing || isFlashVisible} videoId={props.props.executes.execute_1.videoIds.videoId1}/>
                <YoutubeComponent visible={ showEveryThing || isSmokeVisible && isFlashVisible && isAVisible} videoId={props.props.executes.execute_1.videoIds.videoId2}/>
                <YoutubeComponent visible={ isVisible() } videoId={videoConfig.videos.video_80.videoId}/>
                */}
                <YoutubeComponent videoId={getVideoIdOrHidden(videoConfig.videos.video_80)}/>
                <YoutubeComponent videoId={getVideoIdOrHidden(videoConfig.videos.video_82)}/>
            </div>
        </div>

    )


    function getVideoIdOrHidden(video){
        if(isVisible(video)){
            return video.videoId;
        }else{
            return "hidden";
        }
    }

    function isVisible(video){
        return !!(utilityMatches(video.type)
            && teamMatches(video.team)
            && locationMatches(video.location));
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

}

export default ContentGrid;