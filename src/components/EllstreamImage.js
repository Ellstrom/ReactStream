import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const EllstreamImage = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <a href={"#"+props.mapName}>
                        <Image
                            src={props.imageSrc}
                            alt={props.mapName}
                            className="csgo-map-image"
                            rounded>
                        </Image>
                        <h1 class="textOnImage">{props.mapName}</h1>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default EllstreamImage;