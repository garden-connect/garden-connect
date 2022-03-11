import React from "react";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import {SignupForm} from "./SignupForm";


export function SignUp() {
    return (
        <>
            <Container>
                <h2>Welcome to Garden Connect!<br/> This site is meant to build community and facilitate interaction between gardeners and homesteaders in Albuquerque, New Mexico. Take a look around to see what gardeners near you are up to; sign up to become part of the community! </h2>
                <p className={"mt-5"}>Please fill out the following fields to create an account</p>
            </Container>

           <Container>
               <SignupForm/>
           </Container>

            <Container>
                <Row>
                    <Col lg={2} className={"mb-5"}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Col>
                    <Col lg={4}>
                    <p>
                    After creating a profile, click here to sign in!
                    </p>
                    </Col>
                    <Col lg={2}>
                        <Button href='/signin' variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Col>

                </Row>
            </Container>


        </>
    )
}