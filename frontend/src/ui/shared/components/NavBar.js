import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";

export const NavBar = () => (
<Navbar bg="light" expand="sm">
    <Container fluid>
        <Navbar.Brand href="#home">Garden Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink title="My Profile" href="#home">
                    <Link exact to="/">Profile</Link>

                </NavLink>
                <NavLink href="#link"> <Link exact to="/harvest">
                    Harvest
                </Link>
                </NavLink>
                <NavLink href="#home">
                    <Link exact to="/hands">Hands</Link>
                </NavLink>
                <NavLink href="#link">
                    <Link exact to="/signin">Sign-in</Link>
                </NavLink>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
);
