import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const EllstreamImage = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <a href={props.linkClassName}>
                        <Image src={props.imageSrc} alt={props.imageAlt} className="csgo-map-image" rounded />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default EllstreamImage;