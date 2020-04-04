import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const EllstreamImage = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <a href={"#"+props.mapName}>
                        <Image
                            src={props.imageSrc}
                            alt={props.mapName}
                            className="csgo-map-image"
                            rounded>
                        </Image>
                        <h1 className="textOnImage">{props.mapName}</h1>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default EllstreamImage;