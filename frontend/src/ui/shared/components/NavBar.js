
import React, {useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";
import {Nav, Container, Button, Image} from "react-bootstrap";
import {fetchAuth} from "../../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {SigninModal} from "./sign-in/SigninModal";
import {SignOutComponent} from "./SignOut";
import {Post} from "../../Post";
import carrots from "../../../images/carrot2.png"



export const NavBar = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);



    return (

    <Navbar sticky="top" expand="lg" className="navigation border border-2 border-dark mb-5 ">
        <Container fluid>
            <Navbar.Brand>
                <Image className="mb-3 me-3"  width="70 rem" height="auto" src={carrots} alt="carrots"/>
                Garden Connect

            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {auth !== null && (
                        <>
                            <NavLink title="My Profile" href={`/profile/${auth.profileId}`}>
                                <Button className="mt-2">Profile</Button>
                            </NavLink>
                        </>
                    )}
                    <NavLink href="/">
                        <Button className="mt-2">
                        Harvest
                    </Button>
                    </NavLink>
                    <NavLink href="/hands">
                        <Button className="mt-2 me-1">Hands</Button>
                    </NavLink>
                    {auth === null && (
                        <>
                            <NavLink className="mt-2">
                                <SigninModal/>
                            </NavLink>
                            <NavLink href={"/signup"}>
                                <Button className="mt-2">Sign Up</Button>
                            </NavLink>
                        </>
                    )}
                    {auth !== null && (
                        <>
                            <div className="mt-3 me-1">
                                <Post/>
                            </div>
                            <NavLink className="mt-2">
                                <SignOutComponent/>
                            </NavLink>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )};

