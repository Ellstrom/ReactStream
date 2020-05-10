import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const FilterImage = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        className="filter-image"
                        rounded>
                    </Image>
                </Col>
            </Row>
        </Container>
    )
}

export default FilterImage;