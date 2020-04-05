import React from 'react';
import './App.css';
import { Row, Col } from "react-bootstrap";
import EllstreamNavbar from "./components/EllstreamNavbar";
import EllstreamImage from "./components/EllstreamImage";
import EllstreamTable from "./components/EllstreamTable";
import EmptySpace from "./components/EmptySpace"
import MirageMergedSrc from "./images/mirage/mirage.jpg";
import NukeMergedSrc from "./images/nuke/nuke.jpg";
import Dust2MergedSrc from "./images/dust2/dust2.jpg";
import InfernoMergedSrc from "./images/inferno/inferno.jpg";
import VertigoMergedSrc from "./images/vertigo/vertigo.jpg";
import CacheMergedSrc from "./images/cache/cache.jpg";
import OverpassMergedSrc from "./images/overpass/overpass.jpg";
import TrainMergedSrc from "./images/train/train.jpg";
import { MirageConfig } from './configurations/MirageConfig';


function App() {
    return (
        <div className="App">
            <br/><br/><br/><br/><br/><br/>
            <div className="sticky">
                <EllstreamNavbar/>
            </div>
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
            <div id="Mirage">
                <br/><br/><br/><br/>
                <h2 className="mapTitleText" >Mirage</h2>
                <br/><EllstreamTable props={MirageConfig}/>
            </div>

            <EmptySpace/>
            <h2 className="mapTitleText" id="Nuke">Nuke</h2>
            <EmptySpace/>
            <h2 className="mapTitleText" id="Dust2">Dust2</h2>
            <EmptySpace/>
            <h2 className="mapTitleText" id="Inferno">Inferno</h2>
            <EmptySpace/>
            <h2 className="mapTitleText" id="Vertigo">Vertigo</h2>
            <EmptySpace/>
            <h2 className="mapTitleText" id="Cache">Cache</h2>
            <EmptySpace/>
            <h2 className="mapTitleText" id="Overpass">Overpass</h2>
            <EmptySpace/>
            <h2 className="mapTitleText" id="Train">Train</h2>
        </div>
    );
}

export default App;