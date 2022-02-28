import React from "react";
import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";

export const NavBar = () => (
    <header>
        <Navbar bg="primary" expand="sm" variant="dark">
            <Link  to="/"><Navbar.Brand>Infinity ÷ -0</Navbar.Brand> </Link>
                <NavLink>
                    <Link exact to="/my-profile">My Profile</Link>
                </NavLink>
                <NavLink>
                    <Link exact to="/harvest">
                        Harvest
                    </Link>
                </NavLink>
                <NavLink>
                    <Link exact to="/hands">
                        Hands
                    </Link>
                </NavLink>
                <NavLink>
                    <Link exact to="/new-post">
                        New Post
                    </Link>
                </NavLink>
        </Navbar>
    </header>
);
