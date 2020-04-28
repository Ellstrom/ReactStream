import React from 'react';
import EllstreamTable from "./EllstreamTable";
import MapPageImage from "./MapPageImage";
import MapPageSidebar from "./MapPageSidebar";
import {Container, Col, Row} from "react-bootstrap";

const MapPage = ({mapName, mapConfig, mapSrc}) => {
    return (
        <div>
            {/*<Container>*/}
                <Row>
                    <Col sm md lg xl="2">
                        <MapPageSidebar/>
                    </Col>
                    <Col sm md lg xl="8">
                        <div id={mapName}>
                            <MapPageImage imageSrc={mapSrc} mapName={mapName}/>
                            <br/>
                            <EllstreamTable props={mapConfig}/>
                        </div>
                    </Col>
                </Row>
            {/*</Container>*/}
        </div>
    );
};

export default MapPage;