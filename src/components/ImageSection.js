import React from 'react'
import { Row, Col } from "react-bootstrap";
import EllstreamImageWithLink from "./EllstreamImageWithLink";
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
                <br/>
            </Col>
        </Row>
        <div className="grid-container-home-page justify-content-md-center" >
            <Col xs="auto"><EllstreamImageWithLink imageSrc={MirageSrc} mapName="Mirage"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={InfernoSrc} mapName="Inferno"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={Dust2Src} mapName="Dust2"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={NukeSrc} mapName="Nuke"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={VertigoSrc} mapName="Vertigo"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={OverpassSrc} mapName="Overpass"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={AnubisSrc} mapName="Anubis"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={CacheSrc} mapName="Cache"/></Col>
            <Col xs="auto"><EllstreamImageWithLink imageSrc={TrainSrc} mapName="Train"/></Col>
            {/*
            <br/>
            <Row className="justify-content-md-center">
                <Col xs="auto"><EllstreamImageWithLink imageSrc={MirageSrc} mapName="Mirage"/></Col>
                <Col xs="auto"><EllstreamImageWithLink imageSrc={InfernoSrc} mapName="Inferno"/></Col>
                <Col xs="auto"><EllstreamImageWithLink imageSrc={Dust2Src} mapName="Dust2"/></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs="auto"><EllstreamImageWithLink imageSrc={NukeSrc} mapName="Nuke"/></Col>
                <Col xs="auto"><EllstreamImageWithLink imageSrc={VertigoSrc} mapName="Vertigo"/></Col>
                <Col xs="auto"><EllstreamImageWithLink imageSrc={OverpassSrc} mapName="Overpass"/></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs="auto"><EllstreamImageWithLink imageSrc={AnubisSrc} mapName="Anubis"/></Col>
                <Col xs="auto"><EllstreamImageWithLink imageSrc={CacheSrc} mapName="Cache"/></Col>
                <Col xs="auto"><EllstreamImageWithLink imageSrc={TrainSrc} mapName="Train"/></Col>
            </Row>
             */}
        </div>
    </div>
)

export default ImageSection;