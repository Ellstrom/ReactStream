import React from 'react'
import EmptySpace from "./EmptySpace";
import { Row, Col } from "react-bootstrap";
import EllstreamImage from "./EllstreamImage";
import MirageMergedSrc from "../images/mirage/mirage.jpg";
import NukeMergedSrc from "../images/nuke/nuke.jpg";
import Dust2MergedSrc from "../images/dust2/dust2.jpg";
import InfernoMergedSrc from "../images/inferno/inferno.jpg";
import VertigoMergedSrc from "../images/vertigo/vertigo.jpg";
import CacheMergedSrc from "../images/cache/cache.jpg";
import OverpassMergedSrc from "../images/overpass/overpass.jpg";
import TrainMergedSrc from "../images/train/train.jpg";

const ImageSection = () => (
    <div>
        <Row>
            <Col>
                <h1 className="titleText">Select map</h1>
            </Col>
        </Row>
        <div className="flexibleDiv">
            <br/>
            <Row className="justify-content-md-center">
                <Col xs="auto"><EllstreamImage imageSrc={MirageMergedSrc} mapName="Mirage"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={NukeMergedSrc} mapName="Nuke"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={Dust2MergedSrc} mapName="Dust2"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={InfernoMergedSrc} mapName="Inferno"/></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs="auto"><EllstreamImage imageSrc={VertigoMergedSrc} mapName="Vertigo"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={CacheMergedSrc} mapName="Cache"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={OverpassMergedSrc} mapName="Overpass"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={TrainMergedSrc} mapName="Train"/></Col>
            </Row>
        </div>
        <EmptySpace/>
    </div>
)

export default ImageSection;