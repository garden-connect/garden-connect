import React from "react";
import {Button, Form, Container} from "react-bootstrap";


export function Signup() {
    return (
        <>
            <Container>
                <h2>Please fill out the following fields to create an account.</h2>
            </Container>
            <Form>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    )
}