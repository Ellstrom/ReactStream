import React, {useState} from 'react'
import ToggleCheckbox from "./ToggleCheckbox"
import FilterImage from "./FilterImage";
import {Col, Container, Row} from "react-bootstrap"
import CTSrc from "../images/ct.png";
import TSrc from "../images/t.png";
import StratSrc from "../images/strats.png";
import SmokeSrc from "../images/smoke.PNG";
import FlashSrc from "../images/flash.PNG";
import MolotovSrc from "../images/molotov.jpg";
import GrenadeSrc from "../images/grenade.PNG";


const MapPageSidebar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    /*
            <button onClick={() => setModalIsOpen(true)}>Open modal</button>

            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }
            >

            <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </Modal>
     */
    return (
        <div className="roundedBorder">
                <div>
                    <Container>
                        <Row>
                            <Col><FilterImage imageSrc={SmokeSrc} imageAlt="Smoke"/></Col>
                            <Col><h3>Smoke</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <Row>
                            <Col><FilterImage imageSrc={FlashSrc} imageAlt="Flash"/></Col>
                            <Col><h3>Flash</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <Row>
                            <Col><FilterImage imageSrc={MolotovSrc} imageAlt="Molotov"/></Col>
                            <Col><h3>Molotov</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <Row>
                            <Col><FilterImage imageSrc={GrenadeSrc} imageAlt="Grenade"/></Col>
                            <Col><h3>Grenade</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col><FilterImage imageSrc={CTSrc} imageAlt="CT"/></Col>
                            <Col><h3>CT</h3></Col>
                            <Col><ToggleCheckbox/> </Col>
                        </Row>
                        <Row>
                            <Col><FilterImage imageSrc={TSrc} imageAlt="T"/></Col>
                            <Col><h3>T</h3> </Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <Row>
                            <Col><FilterImage imageSrc={StratSrc} imageAlt="Strat"/></Col>
                            <Col><h3>Strats</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col/>
                            <Col><h3>A</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <Row>
                            <Col/>
                            <Col><h3>Mid</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col><h3>B</h3></Col>
                            <Col><ToggleCheckbox/></Col>
                        </Row>
                    </Container>
                </div>
        </div>
    )
}

export default MapPageSidebar
