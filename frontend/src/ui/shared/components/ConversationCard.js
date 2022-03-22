import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

export const ConversationCard = ({message}) => {
    const [showTalker, setShowTalker] = useState(true);
    const auth = useSelector(state => state.auth ? state.auth : null);
    const profiles = useSelector(state => state.profiles ? state.profiles : [])
    const conversation = useSelector(state => (state.conversations ? state.conversations.filter(conversation => conversation.conversationPostId === message.conversationPostId) : []));
// console.log(message)

    const FindProfileName = () => {
        // const profileSenderMessage = conversation.find(conversation => conversation.conversationSendProfileId !== auth.profileId)
        // const profileSenderId = profileSenderMessage.conversationSendProfileId
        const profileSenderId = message.conversationSendProfileId
        const profileSender = profiles.find(profile => profile.profileId === profileSenderId)
        setShowTalker(false)
        return (
            <>
                <div className={showTalker ? "rounded-3 px-2 mx-0" : "rounded-3 rightTalking px-2 mx-0"}>{profileSender.profileName}</div>
            </>
        )

    }

    return (
        <>
            <Container>
                        <Row className={"my-1"}>
                            <Col xs={3}>
                                {/*ConversationProfileName Auth*/}
                                {message && (auth.profileId === message.conversationSendProfileId) && <div className={showTalker ? "leftTalking rounded-3 px-2 mx-0" : "rounded-3 px-2 mx-0"}>{auth.profileName}</div>}
                            </Col>

                            {/*Message*/}
                            <Col xs={6}>
                                {message && <div className={showTalker ? "leftTalking rounded-3 px-2 mx-0" : "rightTalking rounded-3 px-2 mx-0"}>{message.conversationContent}</div> }

                            </Col>
                            <Col xs={3}>
                                {/*ConversationProfileName Auth*/}
                                {message && message.conversationSendProfileId !== auth.profileId && <FindProfileName/>}
                                {/*{message && message.conversationSendProfileId}*/}
                            </Col>
                        </Row>

                </Container>
        </>
    )
}