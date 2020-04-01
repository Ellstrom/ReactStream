import React from 'react';
import './App.css';
import { Row, Col } from "react-bootstrap";
import EllstreamNavbar from "./components/EllstreamNavbar";
import EllstreamImage from "./components/EllstreamImage";
import MirageMergedSrc from "./images/mirage/mirage.jpg";
import NukeMergedSrc from "./images/nuke/nuke.jpg";
import Dust2MergedSrc from "./images/dust2/dust2.jpg";
import InfernoMergedSrc from "./images/inferno/inferno.jpg";
import VertigoMergedSrc from "./images/vertigo/vertigo.jpg";
import CacheMergedSrc from "./images/cache/cache.jpg";
import OverpassMergedSrc from "./images/overpass/overpass.jpg";
import TrainMergedSrc from "./images/train/train.jpg";

function App() {
    return (
        <div className="App">
            <EllstreamNavbar/>
            <Row>
                <Col xs="auto"><EllstreamImage imageSrc={MirageMergedSrc} mapName="Mirage"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={NukeMergedSrc} mapName="Nuke"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={Dust2MergedSrc} mapName="Dust2"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={InfernoMergedSrc} mapName="Inferno"/></Col>
            </Row>
            <Row>
                <Col xs="auto"><EllstreamImage imageSrc={VertigoMergedSrc} mapName="Vertigo"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={CacheMergedSrc} mapName="Cache"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={OverpassMergedSrc} mapName="Overpass"/></Col>
                <Col xs="auto"><EllstreamImage imageSrc={TrainMergedSrc} mapName="Train"/></Col>
            </Row>
            <p id="cache">Cache</p>
        </div>
    );
}

export default App;

/*
 <div className="row">
                    <div align="center">
                        <br/><br/>
                        <h1 align="center">Ellstreams CSGO Page</h1>
                        <a href="https://www.youtube.com/channel/UCIl-p2x09BN5ZbSRCwv821g/videos">Latest videos on Youtube</a>
                        <br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2>Mirage</h2>
                        <h3>Playlists for executes on Mirage</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEVP12aD8n3NTRGxBOKHzMN5">Mirage_T_A_Execute on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWYdC2rxIm0t756ZfRAa9Yz">Mirage_T_B_Execute on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEUvoulu5pBtFt0RUrT6LpOs">Mirage_T_Mid_Execute on Youtube</a><br/><br/>
                    </div>
                    <div className="column">
                        <h2>Nuke</h2>
                        <h3>Playlists for executes on Nuke</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEVVOGzUAlgowi7kfOhGIFEX">Nuke_T_Yard_Execute on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEU_EcbWn9uYRmyI16RY0nw-">Nuke_T_Ramp_Execute on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEV2JVOzalGHRKw6B6blWuj1">Nuke_T_A_Execute on Youtube</a><br/><br/>
                    </div>
                    <div className="column">
                        <h2>Vertigo</h2>
                        <h3>Playlists for executes on Vertigo</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWgC2qdP_ooy3vT7eEKSD80">Vertigo_T_A_Execute on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEVD9ixQrXjkv8PDMAwK_qDp">Vertigo_T_B_Execute on Youtube</a><br/><br/>
                    </div>
                    <div className="column">
                        <h2>Inferno</h2>
                        <h3>Playlists for executes on Inferno</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEVHTj-vs3FkjKhxDv-S1ESG">Inferno_T_A_Execute on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEW7HV0P1S7TeaUz4_IFXyBV">Inferno_T_B_Execute on Youtube</a><br/><br/>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="column">
                        <h3>Other playlists on Mirage</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEXEay2wZsky2NvkUc5EG6ji">Mirage_CT_Mid on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWeTrNljnhHObuVuLNn5nk5">Mirage_CT_A_Retake on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEV8yFqc7lLiLR4InKq9MDeO">Mirage_CT_B on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEXo0mrLdAylVQe9-dBmqByr">Mirage_CT_A on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWwt1qgVYFcb9Dq5m7MYHHq">Mirage_T_Mid on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEUFtDs2H3uIe-W9LVEevEGL">Mirage_T_B on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWBNLDIo8eEwVccvUq3oTaJ">Mirage_T_A on Youtube</a><br/><br/>
                    </div>
                    <div className="column">
                        <h3>Other playlists on Nuke</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEVLulgOwPvm23TTCY7jsytM">Nuke_T_A on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEVEfSNEX00rEi3EgyBB5VHl">Nuke_T_Yard on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEUzt1rof8pZvlmK2KA16Yoe">Nuke_T_Vent on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEUhT9lwipkXvwSZxydQwS4t">Nuke_CT_Vent on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWFgUNLdrlv-0GV-DgH55v9">Nuke_CT_Yard on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEW-5YGw4x7khVDJxYDrKReb">Nuke_CT_Ramp on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWmLExqTmGpTGc2x-HlofTj">Nuke_T_Ramp on Youtube</a><br/><br/>
                    </div>
                    <div className="column">
                        <h3>Other playlists on Vertigo</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWELryIuNBM59UkmM_shBV7">Vertigo_CT_Mid on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWZUy_EbGSvEHphjIVrlWSW">Vertigo_CT_B_Retake on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEW3pQe_AwBmxGewzKT8BpCw">Vertigo_CT_A_Retake on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWzc9Wvig0_0sLUoW_5EW1a">Vertigo_T_Mid on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEWX-6eGl1upHCDcdhcSDrxG">Vertigo_T_B on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEUSbjzaxmAhHwFHqBnCuJX0">Vertigo_T_A on Youtube</a><br/><br/>
                    </div>
                    <div className="column">
                        <h3>Other playlists on Inferno</h3>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEXjubQZ7QbhhqBad6QBL85B">Inferno_CT_A_Retake on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEXreyxLjRLJfA5FHvewaGd3">Inferno_T_B on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEVry39wRu6z_q1FSAy8r6Dp">Inferno_T_Mid on Youtube</a><br/><br/>
                        <a href="https://www.youtube.com/playlist?list=PLQw8naLNRQEX6lzDAWoo2hHLIdUm9zmoh">Inferno_T_A on Youtube</a><br/><br/>
                    </div>
                </div>
 */
