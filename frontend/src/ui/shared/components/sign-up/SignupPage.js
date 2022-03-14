import React from "react";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import {SignupForm} from "./SignupForm";
import {SigninModal} from "../sign-in/SigninModal";


export function SignUp() {
    return (
        <>
            <Container>
                <Row>
                <h1 className="d-flex justify-content-center my-3">Welcome to Garden Connect!</h1>
                </Row>
                <h2 className="d-flex justify-content-center text-center">This site is meant to build community and facilitate interaction between gardeners and homesteaders in Albuquerque, New Mexico. Take a look around to see what gardeners near you are up to; sign up to become part of the community!</h2>
                <p className={"mt-5"}>Please fill out the following fields to create an account</p>
            </Container>

           <Container>
               <SignupForm/>
           </Container>

            <Container>
                <Row>
                    <Col lg={4}>
                    <p>
                    After creating a profile, click here to sign in!
                    </p>
                    </Col>
                    <Col lg={2}>
                        <SigninModal/>
                    </Col>

                </Row>
            </Container>


        </>
    )
}