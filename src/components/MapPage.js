import React, {useMemo, useState} from 'react';
import EllstreamTable from "./EllstreamTable";
import ContentGrid from "./ContentGrid";
import MapPageImage from "./MapPageImage";
import MapPageSidebar from "./MapPageSidebar";
import {FilterContext} from "./FilterContext";

const MapPage = ({mapName, mapConfig, mapSrc}) => {

    const [isSmokeVisible, setSmokeVisible] = useState(true);
    const providerValue = useMemo(() => ({isSmokeVisible, setSmokeVisible}), [isSmokeVisible, setSmokeVisible]);

    return (
        <div>
            <div>
                <MapPageImage imageSrc={mapSrc} mapName={mapName}/>
                <br/><br/>
            </div>
            <div className="grid-container-map-page">
                <FilterContext.Provider value={providerValue}>
                    <div>
                        <MapPageSidebar/>
                    </div>
                    <div>
                        <div id={mapName}>
                            <ContentGrid props={mapConfig}/>
                            <EllstreamTable props={mapConfig}/>
                        </div>
                    </div>
                </FilterContext.Provider>
            </div>
            {/*<Container>
                <Row>
                    <Col>
                        <MapPageSidebar/>
                    </Col>
                    <Col>
                        <div id={mapName}>
                            <MapPageImage imageSrc={mapSrc} mapName={mapName}/>
                            <br/>
                            <ContentGrid props={mapConfig}/>
                            <EllstreamTable props={mapConfig}/>
                        </div>
                    </Col>
                </Row>
            </Container>*/}


        </div>
    );
};

export default MapPage;