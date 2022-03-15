import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

export const ConversationCard = ({message}) => {

console.log(message)
    const auth = useSelector(state => state.auth ? state.auth : null);
    const profiles = useSelector(state => state.profiles ? state.profiles : [])

    const FindProfileName = () => {
        const profileSenderId = message.find(conversation => conversation.conversationSendProfileId !== auth.profileId)
        const profileSenderName = profiles.find(profile => profile.profileId === profileSenderId)
        return (
            <>
                {profileSenderName}
            </>
        )
    }

    return (
        <>
            <Container>
                        <Row>
                            <Col xs={2}>
                                {/*ConversationProfileName Auth*/}
                                {message && auth.profileName === message.conversationSendProfileId && auth.profileName}
                            </Col>

                            {/*Message*/}
                            <Col xs={10}>

                            </Col>
                            <Col xs={2}>
                                {/*ConversationProfileName Auth*/}
                                {message && FindProfileName}
                            </Col>
                        </Row>
                </Container>
        </>
    )
}