import React from 'react';
import './App.css';
import EllstreamNavbar from "./components/EllstreamNavbar";
import MapPage from "./components/MapPage";
import HomePage from "./components/HomePage";
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
                    <Route path="/Mirage" component={() => <MapPage mapName="Mirage" mapSrc={MirageSrc}/>}/>
                    <Route path="/Inferno" component={() => <MapPage mapName="Inferno" mapSrc={InfernoSrc}/>}/>
                    <Route path="/Dust2" component={() => <MapPage mapName="Dust2" mapSrc={Dust2Src}/>}/>
                    <Route path="/Nuke" component={() => <MapPage mapName="Nuke" mapSrc={NukeSrc}/>}/>
                    <Route path="/Vertigo" component={() => <MapPage mapName="Vertigo" mapSrc={VertigoSrc}/>}/>
                    <Route path="/Overpass" component={() => <MapPage mapName="Overpass" mapSrc={OverpassSrc}/>}/>
                    <Route path="/Anubis" component={() => <MapPage mapName="Anubis" mapSrc={AnubisSrc}/>}/>
                    <Route path="/Cache" component={() => <MapPage mapName="Cache" mapSrc={CacheSrc}/>}/>
                    <Route path="/Train" component={() => <MapPage mapName="Train" mapSrc={TrainSrc}/>}/>
                    <Route path="/Feedback" component={Feedback}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;