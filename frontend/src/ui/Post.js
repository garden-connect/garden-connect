import React, {useState} from "react";
import {Button, Container, Dropdown, DropdownButton, Form, FormLabel, Modal, Row} from "react-bootstrap";
import {PostForm} from "./shared/components/PostForm";
import {Link} from "react-router-dom";

//This is for creating post

export const Post = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            {/*<main>*/}
            {/*    <Container>*/}
                    {/*Modal pop up button*/}
                    <Button variant="primary"
                            onClick={() => setModalShow(true)}>
                        Create Post
                    </Button>

                    {/*Modal*/}
                    <Modal
                        size={"lg"}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        // dialogClassName="modal-90w"
                        aria-labelledby="example-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Make a New Post!
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                <PostForm setModalShow={setModalShow}/>

                        </Modal.Body>
                    </Modal>
            {/*    </Container>*/}
            {/*</main>*/}
        </>
    );
}