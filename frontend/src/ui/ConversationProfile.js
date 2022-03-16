import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";
import {fetchConversationsContainingProfileId} from "../store/conversations";
import {ReviewComponent} from "./shared/components/ReviewComponent";
import {ConversationProfileCard} from "./shared/components/ConversationProfileCard";
import {ConversationCard} from "./shared/components/ConversationCard";

export const ConversationProfile = ({match}) => {
    const [lgShow, setLgShow] = useState(false);
    // console.log(match)


    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => (state.profiles ? state.profiles.filter(profile => profile.profileId === match.profileId) : []))[0]
    // console.log(profile)
    const myConversations = useSelector(state => (state.conversations ? state.conversations.filter(conversation => (conversation.conversationReceiveProfileId === auth.profileId) || (conversation.conversationSendProfileId === auth.profileId)) : []));
    // console.log(myConversations)
    const conversations = myConversations.filter(conversation => (conversation.conversationReceiveProfileId === profile.profileId) || (conversation.conversationSendProfileId === profile.profileId))
    // console.log(conversations)
    const convoPostIds = conversations.map(conversation => conversation.conversationPostId)
    // console.log(convoPostIds)
    // const posts = useSelector(state => (state.posts ? state.posts.filter(post => convoPostIds.forEach(id => post.postId === convoPostIds[id])) : []))
    const posts = useSelector(state => state.posts ? state.posts.filter(post => convoPostIds.includes(post.postId)) : [])
// console.log(posts)
    return (
        <>
            <Container className={"m-0 ps-0"}>
                <Button variant="primary" className="my-0" onClick={() => setLgShow(true)}>
                    Message History
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
                            <Col>
                                {posts.map((post) =>  <ConversationProfileCard post={post} key={post.postId}/>)}
                            </Col>

                        </Row>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}
