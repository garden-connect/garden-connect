import {Button, Col, Image, ModalBody, Row, Stack} from "react-bootstrap";
import React, {useState} from "react";
import {Modal} from "react-bootstrap";

function Message() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Button onClick={() => setLgShow(true)}>Message</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Start a conversation!
                    </Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <input></input>
                    <Button>Send</Button>
                </ModalBody>
            </Modal>
        </>
    );
}





export const PostComponents = ({postComponents}) => {
    const {name, rating, title, content, date} = postComponents
    return (
        <>
            <Row className={"border border-dark border-rounded p-3 m-5"}>
                <Col sm={3}>
                    <Image fluid className={"d-block"} src={"https://via.placeholder.com/200"}/>
                </Col>
                <Col>
                    <Stack className={"p-3 justify-content-start"} direction={"horizontal"} gap={4} >
                        <p>{name}</p><p>{rating}</p>
                        <p>{date}</p>
                        <Message>
                            Message
                        </Message>

                    </Stack>
                    <div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </div>
                </Col>
            </Row>
        </>
    );

}
