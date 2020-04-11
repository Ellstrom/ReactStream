import React from 'react'
import EmptySpace from "./EmptySpace";
import { Row, Col } from "react-bootstrap";
import EllstreamImage from "./EllstreamImage";
import MirageSrc from "../images/mirage/mirage.jpg";
import NukeSrc from "../images/nuke/nuke.jpg";
import Dust2Src from "../images/dust2/dust2.jpg";
import InfernoSrc from "../images/inferno/inferno.jpg";
import VertigoSrc from "../images/vertigo/vertigo.jpg";
import CacheSrc from "../images/cache/cache.jpg";
import OverpassSrc from "../images/overpass/overpass.jpg";
import TrainSrc from "../images/train/train.jpg";
import AnubisSrc from "../images/anubis/anubis.jpg";

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
                <Col xs="auto"><EllstreamImage imageSrc={MirageSrc} mapName="Mirage"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={InfernoSrc} mapName="Inferno"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={Dust2Src} mapName="Dust2"/></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs="auto"><EllstreamImage imageSrc={NukeSrc} mapName="Nuke"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={VertigoSrc} mapName="Vertigo"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={OverpassSrc} mapName="Overpass"/></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs="auto"><EllstreamImage imageSrc={AnubisSrc} mapName="Anubis"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={CacheSrc} mapName="Cache"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={TrainSrc} mapName="Train"/></Col>
            </Row>
        </div>
        <EmptySpace/>
    </div>
)

export default ImageSection;