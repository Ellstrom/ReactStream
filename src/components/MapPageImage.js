import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const MapPageImage = (props) => {
    return (
        <Container>
            <Row>
                <Col/>
                <Col>
                    <Image
                        src={props.imageSrc}
                        alt={props.mapName}
                        className="map-page-image"
                        rounded>
                    </Image>
                    <h1 className="textOnImage">{props.mapName}</h1>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default MapPageImage;