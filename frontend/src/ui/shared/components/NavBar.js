import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";

export const NavBar = () => (
<Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">Garden Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">
                    <Link exact to="/">My Profile</Link>
                </Nav.Link>
                <Nav.Link href="#link"> <Link exact to="/harvest">
                    Harvest
                </Link>
                </Nav.Link>
                <Nav.Link href="#home">
                    <Link exact to="/hands">Hands</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                    <Link exact to="/post">New Post</Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
);
