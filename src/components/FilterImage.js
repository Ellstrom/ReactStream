import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const FilterImage = (props) => {
    return (
        <Image
            src={props.imageSrc}
            alt={props.imageAlt}
            className="filter-image"
            rounded>
        </Image>
    )
}

export default FilterImage;