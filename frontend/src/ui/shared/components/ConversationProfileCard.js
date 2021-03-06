import React, {useEffect, useState} from "react";
import {Modal, Button, Row, Col, InputGroup, FormControl, Container, DropdownButton} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ConversationCard} from "./ConversationCard";
import {ConversationPostForm} from "./ConversationPostForm";
// import {ConversationDropdown} from "./ConversationDropdown";
import {Dropdown} from "react-bootstrap";
import profiles from "../../../store/profiles";
import {ConversationProfileForm} from "./ConversationProfileForm";

export const ConversationProfileCard = ({post}) => {
    const [showConvo, setShowConvo] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState("")
    // console.log(post)


    const auth = useSelector(state => state.auth ? state.auth : null);


    // const conversations = useSelector(state => (state.conversations ? state.conversations : []))
    const conversations = useSelector(state => (state.conversations ? state.conversations.filter(conversation => conversation.conversationPostId === post.postId) : []));
    const ourConversations = conversations.filter(conversation => conversation.conversationSendProfileId === auth.profileId || conversation.conversationReceiveProfileId === auth.profileId)
    // console.log(ourConversations)
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
    const oursAndSelectedConversations = otherProfiles[0] ? ourConversations.filter(conversation => conversation.conversationSendProfileId === selectedProfile.profileId || conversation.conversationReceiveProfileId === selectedProfile.profileId) : []
    const dateShort = new Date(post.postDate)
// console.log(oursAndSelectedConversations)
    const postersProfile = useSelector(state => state.profiles ? state.profiles.filter(profile => profile.profileId === post.postProfileId)[0] : [])
    const handleClick = (profile) => {
        setSelectedProfile(profile)
        setShowConvo(true)
    }
    const toggleClick = (profile) => {
        setSelectedProfile(profile)
        setShowConvo(!showConvo)
    }
    const postAndProfile = post ? {...post, ...selectedProfile} : {}


    const ConversationDropdown = ({props}) => {

        return (
            <>
                <Dropdown.Item as={"button"} onClick={() => handleClick(props)}>{props.profileName}</Dropdown.Item>
            </>
        )
    }
    return (
        <>
            <div>
                        <Row>
                            {/*<Col xs={3}>*/}
                            {/*    <Button onClick={() => setShowConvo(!showConvo) }>{showConvo ? "Hide Conversation" : `View Conversation`}</Button>*/}
                            {/*</Col>*/}
                            <div className={"col mb-4"}>
                                {otherProfiles[0] && otherProfiles.length === 1 && <Button size={"sm"} onClick={() => toggleClick(otherProfiles[0])}>{showConvo ? "Hide Conversation" : `View Conversation With ${otherProfiles[0].profileName}`}</Button>}
                                {/*&& setSelectedProfile(otherProfiles[0])*/}

                                {otherProfiles[0] && otherProfiles.length > 1 &&
                                    <>
                                    <DropdownButton id={"dropdown-item-button"} size={"sm"} title={`View Conversation With:`}>
                                        {showConvo && <Dropdown.Item as={"button"} onClick={() => setShowConvo(false)}>Hide Conversation</Dropdown.Item>}
                                        {otherProfiles.map((props) => <ConversationDropdown props={props} key={props.profileId}/>)}
                                    </DropdownButton>
                                    </>
                                    }
                            </div>
                            <Col>
                                {post && <p className={"mb-0"}>About: <strong>{post.postTitle}</strong></p>}
                            </Col>
                            <Col>
                                {/*<FindProfileName/>*/}
                                {postersProfile && <p>Posted by: <a className={"dark-a"} href={`/profile/${postersProfile.profileId}`}>{postersProfile.profileName}</a></p>}
                            </Col>
                            <Col>
                                {post && <p>On: {dateShort.toLocaleDateString()}</p> }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {/*ConversationPost History*/}
                                {showConvo && oursAndSelectedConversations && oursAndSelectedConversations.map((message , index) =>  <ConversationCard message={message} key={index}/>)}
                            </Col>
                        </Row>
                        <Row>
                            {showConvo && <ConversationProfileForm props={postAndProfile}/>}
                        </Row>
            </div>
        </>
    )
}