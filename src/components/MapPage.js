import React from 'react';
import EllstreamTable from "./EllstreamTable";
import MapPageImage from "./MapPageImage";

const MapPage = ({mapName, mapConfig, mapSrc}) => {
    return (
        <div id={mapName}>
            <MapPageImage imageSrc={mapSrc} mapName={mapName}/>
            <br/>
            <EllstreamTable props={mapConfig}/>
        </div>
    );
};

export default MapPage;