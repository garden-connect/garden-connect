import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ConversationCard} from "./ConversationCard";
import {ConversationForm} from "./ConversationForm";

export const ConversationProfileCard = ({post}) => {
    const [showConvo, setShowConvo] = useState(false);
    // console.log(post)


    const auth = useSelector(state => state.auth ? state.auth : null);


    // const conversations = useSelector(state => (state.conversations ? state.conversations : []))
    const conversations = useSelector(state => (state.conversations ? state.conversations.filter(conversation => conversation.conversationPostId === post.postId) : []));

    const dateShort = new Date(post.postDate)
// console.log(conversations)
    const profiles = useSelector(state => state.profiles ? state.profiles : [])
    const FindProfileName = () => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {/*{profile && <h3>{profile.profileName}</h3>}*/}
                {profile && <a href={`/profile/${profile.profileId}`}>{profile.profileName}</a>}
            </>
        )
    }
    return (
        <>
            <Container>
                        <Row>
                            <Col>
                                {post && <p><strong>{post.postTitle}</strong></p>}
                            </Col>
                            <Col>
                                <FindProfileName/>
                            </Col>
                            <Col>
                                {post && dateShort.toLocaleDateString()}
                            </Col>
                            <Col>
                                <Button onClick={() => setShowConvo(true) }>View Conversation</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                {/*ConversationPost History*/}
                                {showConvo && conversations.map((message , index) =>  <ConversationCard message={message} key={index}/>)}
                            </Col>
                        </Row>
                        <Row>
                            {showConvo && <ConversationForm/>}
                        </Row>
            </Container>
        </>
    )
}