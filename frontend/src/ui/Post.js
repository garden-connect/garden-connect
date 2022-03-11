import React, {useState} from "react";
import {Button, Container, Dropdown, DropdownButton, Form, FormLabel, Modal, Row} from "react-bootstrap";
import {PostForm} from "./shared/components/PostForm";

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
                        </Modal.Header>
                        <Modal.Body>
                            {/*Create Post Form*/}
                <PostForm/>
                    {/*<Row>*/}
                    {/*    /!*Title Input*!/*/}
                    {/*    <FormLabel>Title</FormLabel>*/}
                    {/*    <input id={"postTitle"} placeholder={"Custom Title"}/>*/}
                    {/*    /!*Image Input*!/*/}
                    {/*    <FormLabel>Image</FormLabel>*/}
                    {/*<input className="form-control" type={"file"} id="addPicture"*/}
                    {/*       placeholder="Add Image"/>*/}
                    {/*    /!*Select Category*!/*/}
                    {/*    <FormLabel>Harvest or Hands</FormLabel>*/}
                    {/*    <DropdownButton id="dropdown-basic-button" title="Category">*/}
                    {/*        <Dropdown.Item href="#/action-1">Harvest</Dropdown.Item>*/}
                    {/*        <Dropdown.Item href="#/action-2">Hands</Dropdown.Item>*/}
                    {/*    </DropdownButton>*/}
                    {/*    /!*Post Description*!/*/}
                    {/*    <FormLabel>Item Description</FormLabel>*/}
                    {/*    <input id={"postDescription"} placeholder={"Description must be no longer than 512 characters"}/>*/}
                    {/*</Row>*/}
                    {/*<div className={"mt-3"}>*/}
                    {/*<Button>Post</Button>*/}
                    {/*<Button className={"mx-3"}>Cancel</Button>*/}
                    {/*</div>*/}

                        </Modal.Body>
                    </Modal>
                </Container>
            </main>
        </>
    )
}