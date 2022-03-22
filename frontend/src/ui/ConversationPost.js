import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {PostCard} from "./shared/components/PostCard";
import {ConversationPostForm} from "./shared/components/ConversationPostForm";
import {fetchConversationsByPostId} from "../store/conversations";
import {ConversationCard} from "./shared/components/ConversationCard";

export const ConversationPost = ({post}) => {
    const [lgShow, setLgShow] = useState(false);
    // console.log(post)


    const auth = useSelector(state => state.auth ? state.auth : null);


    // const conversations = useSelector(state => (state.conversations ? state.conversations : []))
    const conversations = useSelector(state => (state.conversations ? state.conversations.filter(conversation => conversation.conversationPostId === post.postId) : []));
    const ourConversations = conversations.filter(conversation => conversation.conversationSendProfileId === auth.profileId || conversation.conversationReceiveProfileId === auth.profileId)

    const dateShort = new Date(post.postDate)
// console.log(conversations)
    const profile = useSelector(state => state.profiles ? state.profiles.filter(profile => profile.profileId === post.postProfileId)[0] : [])
    // const FindProfileName = () => {
    //     const profile = profiles.find(profile => post.postProfileId === profile.profileId)
    //     return (
    //         <>
    //             {/*{profile && <h3>{profile.profileName}</h3>}*/}
    //             {profile && <a href={`/profile/${profile.profileId}`}>{profile.profileName}</a>}
    //         </>
    //     )
    // }
    return (
        <>
            <Container className="m-0 p-0">
                <Row>
                <Col xs={4} className="ms-">

                <Button onClick={() => setLgShow(true)}>
                    Message
                </Button>
                </Col>
                </Row>

                <Modal
                    size={"lg"}
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id={"modal-lg"}>Post Conversation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                {post && <p><strong>{post.postTitle}</strong></p>}
                            </Col>
                            <Col>
                                {/*<FindProfileName/>*/}
                                {profile && <p>Posted by: <a className={"dark-a"} href={`/profile/${profile.profileId}`}>{profile.profileName}</a></p>}
                            </Col>
                            <Col>
                                {post && <p>On: {dateShort.toLocaleDateString()}</p>}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {post && (<p>{post.postContent}</p>)}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                {/*ConversationPost History*/}
                                {ourConversations.map((message , index) =>  <ConversationCard message={message} key={index}/>)}
                            </Col>
                        </Row>
                        <Row>
                            {post && <ConversationPostForm post={post}/>}
                        </Row>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}