import React from "react";
import {Button, Form, Container, Row, Col} from "react-bootstrap";


export function Signup() {
    return (
        <>
            <Container>
                <h2>Welcome to Garden Connect!<br/> This site is meant to build community and facilitate interaction between gardeners and homesteaders in Albuquerque, New Mexico. Take a look around to see what gardeners near you are up to; sign up to become part of the community! </h2>
                <p className={"mt-5"}>Please fill out the following fields to create an account</p>
            </Container>
           <Container>
            <Form className="w-50">
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter your first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="lastName" placeholder="Enter your last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="userName" placeholder="Choose your Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Please re-enter your password to confirm" />
                </Form.Group>
            </Form>
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