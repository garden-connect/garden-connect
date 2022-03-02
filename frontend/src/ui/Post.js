import React from "react";
import {Container, Dropdown, DropdownButton, Form, FormLabel, Row} from "react-bootstrap";


export const Post = () => {
    return (
        <>
            <main>
                <Container>
                {/*Create Post Form*/}
                <Form>
                    <Row>
                        {/*Post Form Title Input*/}
                        <FormLabel>Title</FormLabel>
                        <input id={"postTitle"} placeholder={"Custom Title"}/>
                        {/*Image Input*/}
                        <FormLabel>Image</FormLabel>
                    <input className="form-control" id="addPicture"
                           placeholder="Add Image"/>
                        {/*Select Category*/}
                        <FormLabel>Harvest or Hands</FormLabel>
                        <DropdownButton id="dropdown-basic-button" title="Category">
                            <Dropdown.Item href="#/action-1">Harvest</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Hands</Dropdown.Item>
                        </DropdownButton>
                        {/*Post Description*/}
                        <FormLabel>Item Description</FormLabel>
                        <input id={"postDescription"} placeholder={"Description must be no longer than 512 characters"}/>
                    </Row>
                </Form>
                </Container>
            </main>
        </>
    )
}