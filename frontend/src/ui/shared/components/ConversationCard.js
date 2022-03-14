import {Button, Col, Image, Row, Stack} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import {Conversation} from "/frontend/src/ui/Conversation";

export const ConversationCard = ({conversation}) => {

    const auth = useSelector(state => state.auth ? state.auth : null);

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




}