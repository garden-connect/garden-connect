import React, {useState} from "react";
import {Button, Container, Dropdown, DropdownButton, Form, FormLabel, Modal, Row} from "react-bootstrap";
import {PostForm} from "./shared/components/PostForm";
import {Link} from "react-router-dom";

//This is for creating post

export const Post = () => {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <main>
                <Container>
                    {/*Modal pop up button*/}
                    <Button variant="primary" onClick={() => setLgShow(true)}>
                        Create Post
                    </Button>
                    {/*Modal*/}
                    <Modal
                        size={"lg"}
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Make a New Post!
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                <PostForm/>

                        </Modal.Body>
                    </Modal>
                </Container>
            </main>
        </>
    )
}