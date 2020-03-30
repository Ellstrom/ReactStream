import React from 'react'
import {Navbar, Nav} from "react-bootstrap";

const EllstreamNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#mirage">Mirage</Nav.Link>
                <Nav.Link href="#inferno">Inferno</Nav.Link>
                <Nav.Link href="#overpass">Overpass</Nav.Link>
                <Nav.Link href="#vertigo">Vertigo</Nav.Link>
                <Nav.Link href="#nuke">Nuke</Nav.Link>
                <Nav.Link href="#train">Train</Nav.Link>
                <Nav.Link href="#dust2">Dust2</Nav.Link>
                <Nav.Link href="#cache">Cache</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default EllstreamNavbar;