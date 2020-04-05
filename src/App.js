import React from 'react';
import './App.css';
import EllstreamNavbar from "./components/EllstreamNavbar";
import { MirageConfig } from './configurations/MirageConfig';
import { NukeConfig } from "./configurations/NukeConfig";
import { Dust2Config } from "./configurations/Dust2Config";
import { InfernoConfig } from "./configurations/InfernoConfig";
import { VertigoConfig } from "./configurations/VertigoConfig";
import { CacheConfig } from "./configurations/CacheConfig";
import { OverpassConfig } from "./configurations/OverpassConfig";
import { TrainConfig } from "./configurations/TrainConfig";
import TableArea from "./components/TableArea";
import Feedback from "./components/Feedback";
import ImageSection from "./components/ImageSection";


function App() {
    return (
        <div className="App">
            <EllstreamNavbar/>
            <ImageSection/>
            <TableArea mapName="Mirage" config={MirageConfig}/>
            <TableArea mapName="Nuke" config={NukeConfig}/>
            <TableArea mapName="Dust2" config={Dust2Config}/>
            <TableArea mapName="Inferno" config={InfernoConfig}/>
            <TableArea mapName="Vertigo" config={VertigoConfig}/>
            <TableArea mapName="Cache" config={CacheConfig}/>
            <TableArea mapName="Overpass" config={OverpassConfig}/>
            <TableArea mapName="Train" config={TrainConfig}/>
            <Feedback/>
        </div>
    );
}

export default App;