import React from 'react';
import './App.css';
import EllstreamNavbar from "./components/EllstreamNavbar";
import MapPage from "./components/MapPage";
import HomePage from "./components/HomePage";
import { MirageConfig } from './configurations/MirageConfig';
import { NukeConfig } from "./configurations/NukeConfig";
import { Dust2Config } from "./configurations/Dust2Config";
import { InfernoConfig } from "./configurations/InfernoConfig";
import { VertigoConfig } from "./configurations/VertigoConfig";
import { CacheConfig } from "./configurations/CacheConfig";
import { OverpassConfig } from "./configurations/OverpassConfig";
import { TrainConfig } from "./configurations/TrainConfig";
import { AnubisConfig } from "./configurations/AnubisConfig";
import MirageSrc from "./images/mirage/mirage.jpg";
import NukeSrc from "./images/nuke/nuke.jpg";
import Dust2Src from "./images/dust2/dust2.jpg";
import InfernoSrc from "./images/inferno/inferno.jpg";
import VertigoSrc from "./images/vertigo/vertigo.jpg";
import CacheSrc from "./images/cache/cache.jpg";
import OverpassSrc from "./images/overpass/overpass.jpg";
import TrainSrc from "./images/train/train.jpg";
import AnubisSrc from "./images/anubis/anubis.jpg";
import Feedback from "./components/Feedback";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <EllstreamNavbar/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/Mirage" component={() => <MapPage mapName="Mirage" mapConfig={MirageConfig} mapSrc={MirageSrc}/>}/>
                    <Route path="/Inferno" component={() => <MapPage mapName="Inferno" mapConfig={InfernoConfig} mapSrc={InfernoSrc}/>}/>
                    <Route path="/Dust2" component={() => <MapPage mapName="Dust2" mapConfig={Dust2Config} mapSrc={Dust2Src}/>}/>
                    <Route path="/Nuke" component={() => <MapPage mapName="Nuke" mapConfig={NukeConfig} mapSrc={NukeSrc}/>}/>
                    <Route path="/Vertigo" component={() => <MapPage mapName="Vertigo" mapConfig={VertigoConfig} mapSrc={VertigoSrc}/>}/>
                    <Route path="/Overpass" component={() => <MapPage mapName="Overpass" mapConfig={OverpassConfig} mapSrc={OverpassSrc}/>}/>
                    <Route path="/Anubis" component={() => <MapPage mapName="Anubis" mapConfig={AnubisConfig} mapSrc={AnubisSrc}/>}/>
                    <Route path="/Cache" component={() => <MapPage mapName="Cache" mapConfig={CacheConfig} mapSrc={CacheSrc}/>}/>
                    <Route path="/Train" component={() => <MapPage mapName="Train" mapConfig={TrainConfig} mapSrc={TrainSrc}/>}/>
                    <Route path="/Feedback" component={Feedback}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;