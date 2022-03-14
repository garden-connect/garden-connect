import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {PostCard} from "./shared/components/PostCard";
import {ConversationForm} from "./shared/components/ConversationForm";
import {fetchConversationsByPostId} from "../store/conversations";
import {ConversationCard} from "./shared/components/ConversationCard";

export const ConversationPost = ({post}) => {
    const [lgShow, setLgShow] = useState(false);
    console.log(post)


    const auth = useSelector(state => state.auth ? state.auth : null);

    const dispatch = useDispatch()

    const sideEffects = () => {

        dispatch(fetchConversationsByPostId(post.postId));
        // dispatch()
    }
    useEffect(sideEffects, [post.postId, dispatch])

    const conversation = useSelector(state => state.conversations ? state.conversations : []);
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
                            <Col xs={6} md={4}>
                                {/*ConversationPost History*/}
                                {conversation.map((message , index) =>  <ConversationCard message={message} key={index}/>)}
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