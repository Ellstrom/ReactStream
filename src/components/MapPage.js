import React from 'react';
import EllstreamTable from "./EllstreamTable";
import ContentGrid from "./ContentGrid";
import MapPageImage from "./MapPageImage";
import MapPageSidebar from "./MapPageSidebar";

const MapPage = ({mapName, mapConfig, mapSrc}) => {
    return (
        <div>
            <div>
                <MapPageImage imageSrc={mapSrc} mapName={mapName}/>
                <br/><br/>
            </div>
            <div className="grid-container-map-page">
                <div>
                    <MapPageSidebar/>
                </div>
                <div>
                    <div id={mapName}>
                        <ContentGrid props={mapConfig}/>
                        <EllstreamTable props={mapConfig}/>
                    </div>
                </div>
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