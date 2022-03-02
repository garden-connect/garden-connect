import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";

export const NavBar = () => (
<Navbar bg="light" expand="xl">
    <Container>
        <Navbar.Brand href="#home">Garden Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink href="#home">
                    <Link exact to="/">My Profile</Link>
                </NavLink>
                <NavLink href="#link"> <Link exact to="/harvest">
                    Harvest
                </Link>
                </NavLink>
                <NavLink href="#home">
                    <Link exact to="/hands">Hands</Link>
                </NavLink>
                <NavLink href="#link">
                    <Link exact to="/post">New Post</Link>
                </NavLink>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
);
