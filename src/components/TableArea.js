import React from 'react'
import EllstreamTable from "./EllstreamTable";
import EmptySpace from "./EmptySpace";

const TableArea = (properties) => (
    <div>
        <div id={properties.mapName}>
            <br/><br/><br/><br/>
            <h2 className="mapTitleText" >{properties.mapName}</h2>
            <br/><EllstreamTable props={properties.config}/>
        </div>
        <EmptySpace/>
    </div>
)

export default TableArea;