import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container, DropdownButton} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ConversationCard} from "./ConversationCard";
import {ConversationForm} from "./ConversationForm";
import {ConversationDropdown} from "./ConversationDropdown";
import profiles from "../../../store/profiles";

export const ConversationProfileCard = ({post}) => {
    const [showConvo, setShowConvo] = useState(false);
    // console.log(post)


    const auth = useSelector(state => state.auth ? state.auth : null);


    // const conversations = useSelector(state => (state.conversations ? state.conversations : []))
    const conversations = useSelector(state => (state.conversations ? state.conversations.filter(conversation => conversation.conversationPostId === post.postId) : []));
    const ourConversations = conversations.filter(conversation => conversation.conversationSendProfileId === auth.profileId || conversation.conversationReceiveProfileId === auth.profileId)
    console.log(ourConversations)
    // let otherProfiles = []
    // console.log(otherProfiles)
    // useSelector(state => state.profiles ? ourConversations.forEach(conversation => profiles.forEach(profile => {
    //     if (profile.profileId === conversation.conversationSendProfileId && profile.profileId !== auth.profileId) {
    //         otherProfiles.push(profile)
    //     }
    // })) : [])
    const profiles = useSelector(state => state.profiles ? state.profiles : [])
    const otherProfiles = profiles.filter(profile => ourConversations.some(conversation => (conversation.conversationSendProfileId === profile.profileId || conversation.conversationReceiveProfileId === profile.profileId) && profile.profileId !== auth.profileId
    ))

    // otherProfiles.push(newProfile ? newProfile : {})
    // console.log(auth.profileId)
    // console.log(otherProfiles)
    // let selectedProfile = otherProfiles[0]
    // console.log(selectedProfile)
    const oursAndSelectedConversations = otherProfiles[0] ? ourConversations.filter(conversation => conversation.conversationSendProfileId === otherProfiles[0].profileId || conversation.conversationReceiveProfileId === otherProfiles[0].profileId) : []
    const dateShort = new Date(post.postDate)
// console.log(conversations)
    const postersProfile = useSelector(state => state.profiles ? state.profiles.filter(profile => profile.profileId === post.postProfileId)[0] : [])
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
            <Container>
                        <Row>
                            <Col>
                                <Button onClick={() => setShowConvo(!showConvo) }>{showConvo ? "Hide Conversation" : `View Conversation`}</Button>
                            </Col>
                            <Col>
                                {otherProfiles[0] && otherProfiles.length === 1 && <p>with: {otherProfiles[0].profileName}</p>}
                                {otherProfiles[0] && otherProfiles.length > 1 &&
                                    <>
                                    <DropdownButton id={"dropdown-item-button"} title={"With:"}>
                                        {otherProfiles.map((props) => <ConversationDropdown props={props}/>)}
                                    </DropdownButton>
                                    </>
                                    }
                            </Col>
                            <Col>
                                {post && <p><strong>{post.postTitle}</strong></p>}
                            </Col>
                            <Col>
                                {/*<FindProfileName/>*/}
                                {postersProfile && <a className={"dark-a"} href={`/profile/${postersProfile.profileId}`}>posted by: {postersProfile.profileName}</a>}
                            </Col>
                            <Col>
                                {post && dateShort.toLocaleDateString()}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                {/*ConversationPost History*/}
                                {showConvo && ourConversations && ourConversations.map((message , index) =>  <ConversationCard message={message} key={index}/>)}
                            </Col>
                        </Row>
                        <Row>
                            {showConvo && <ConversationForm post={post}/>}
                        </Row>
            </Container>
        </>
    )
}