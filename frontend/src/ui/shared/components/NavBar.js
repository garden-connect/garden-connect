import React, {useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";
import {Nav, Container, Button} from "react-bootstrap";
import {fetchAuth} from "../../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {SigninModal} from "./sign-in/SigninModal";
import {SignOutComponent} from "./SignOut";
import {Post} from "../../Post";
import {SignUp} from "./sign-up/SignupPage";

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
                    {auth !== null && (
                        <>
                            <NavLink title="My Profile" href={`/profile/${auth.profileId}`}>
                                <Button>Profile</Button>
                            </NavLink>
                        </>
                    )}
                    <NavLink href="/"> <Button>
                        Harvest
                    </Button>
                    </NavLink>
                    <NavLink href="/hands">
                        <Button>Hands</Button>
                    </NavLink>
                    {auth === null && (
                        <>
                            <NavLink>
                                <SigninModal/>
                            </NavLink>
                            <NavLink href={"/signup"}>
                                <Button>Sign Up</Button>
                            </NavLink>
                        </>
                    )}
                    {auth !== null && (
                        <>
                            <NavLink>
                                <Post/>
                            </NavLink>
                            <NavLink>
                                <SignOutComponent/>
                            </NavLink>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )};
