import React from 'react'
import {Navbar, Nav} from "react-bootstrap";

const EllstreamNavbar = () => (
    <div id="Navbar">
        <br/><br/><br/><br/>
        <div className="sticky">
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Nav.Link href="/">Home</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Mirage">Mirage</Nav.Link>
                        <Nav.Link href="/Inferno">Inferno</Nav.Link>
                        <Nav.Link href="/Dust2">Dust2</Nav.Link>
                        <Nav.Link href="/Nuke">Nuke</Nav.Link>
                        <Nav.Link href="/Vertigo">Vertigo</Nav.Link>
                        <Nav.Link href="/Overpass">Overpass</Nav.Link>
                        <Nav.Link href="/Anubis">Anubis</Nav.Link>
                        <Nav.Link href="/Cache">Cache</Nav.Link>
                        <Nav.Link href="/Train">Train</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/Feedback">Feedback</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
)

export default EllstreamNavbar;