import React, {useState} from "react";
import {Button, Form, Container, Modal} from "react-bootstrap";
import {SignInForm} from "./SigninForm";
import Link from "react-router-dom/es/Link";


export function SigninModal() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Sign In
            </Button>

            <Modal
                size="lg"
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Welcome to Garden Connect!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignInForm setModalShow={setModalShow}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

