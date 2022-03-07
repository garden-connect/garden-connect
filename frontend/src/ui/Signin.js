import React, {useState} from "react";
import {Button, Form, Container, Modal} from "react-bootstrap";

export function Signin() {

    const [lgShow, setLgShow] = useState(true);

    return (
        <>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Welcome to Garden Connect!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form className="w-75">
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
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>

                    <div>
                        <Container className={"mt-5"}>
                            <p>If you do not already have an account, click on "Sign Up" to create one.</p>
                            <Button href='/signup' variant="primary" type="sign up">
                                Sign Up
                            </Button>
                        </Container>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

