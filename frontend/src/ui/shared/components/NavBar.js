import React, {useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";
import {fetchAuth} from "../../../store/auth";
import {useDispatch, useSelector} from "react-redux";

export const NavBar = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    return (

    <Navbar bg="light" expand="sm">
        <Container fluid>
            <Navbar.Brand>Garden Connect</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink title="My Profile" href="#home">
                        <Link exact to="/profile">Profile</Link>

                    </NavLink>
                    <NavLink href="#link"> <Link exact to="/">
                        Harvest
                    </Link>
                    </NavLink>
                    <NavLink href="#home">
                        <Link exact to="/hands">Hands</Link>
                    </NavLink>
                    <NavLink href="#link">
                        <Link exact to="/signout">Sign-out</Link>
                    </NavLink>
                    <NavLink href="#link">
                        <Link exact to="/signin">Sign-in</Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )};
