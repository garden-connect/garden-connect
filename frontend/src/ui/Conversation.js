gi timport React, {useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";

export const Conversation = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Container>
            <Button variant="primary" onClick={() => setLgShow(true)}>
                Messages
            </Button>

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

                        <Row>
                        <Col xs={6} md={4}>
                    {/*Conversation History*/}
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li>
                            <h5>Message History of Posts</h5>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
                                Carrots by Old McDonald
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-dark">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                        </Col>

                            {/*Chat Box*/}
                            <Col>
                                <h6 align={"center"}>Carrots chat with Old Mcdonald</h6>
                                {/*input message*/}
                                <InputGroup className={"justify-content-end"}>
                                    <FormControl/>
                                    <Button>Send</Button>
                                </InputGroup>
                            </Col>
                        </Row>
                </Modal.Body>
            </Modal>
            </Container>
        </>
    )
}

//New Conversation from post modal
export const CreateMessage = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Container>
                <Button variant="primary" onClick={() => setLgShow(true)}>
                    Message
                </Button>

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
                        {/*New Conversation*/}
                        <Row>
                                <h6 align={"center"}>Carrots chat with Old Mcdonald</h6>
                                {/*input message*/}
                                <InputGroup className={"justify-content-end"}>
                                    <FormControl/>
                                    <Button>Send</Button>
                                </InputGroup>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}
