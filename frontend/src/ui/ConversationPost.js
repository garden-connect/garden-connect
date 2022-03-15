import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {PostCard} from "./shared/components/PostCard";
import {ConversationForm} from "./shared/components/ConversationForm";
import {fetchConversationsByPostId} from "../store/conversations";
import {ConversationCard} from "./shared/components/ConversationCard";

export const ConversationPost = ({post}) => {
    const [lgShow, setLgShow] = useState(false);
    // console.log(post)


    const auth = useSelector(state => state.auth ? state.auth : null);


    // const conversations = useSelector(state => (state.conversations ? state.conversations : []))
    const conversations = useSelector(state => (state.conversations ? state.conversations.filter(conversation => conversation.conversationPostId === post.postId) : []));

// console.log(conversations)
    return (
        <>
            <Container>
                <Button variant="primary" onClick={() => setLgShow(true)}>
                    Send Me a Message
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
                            <Col xs={12}>
                                {/*ConversationPost History*/}
                                {conversations.map((message , index) =>  <ConversationCard message={message} key={index}/>)}
                            </Col>
                        </Row>
                        <Row>
                            {post && <ConversationForm/>}
                        </Row>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}