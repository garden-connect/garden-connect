import React from "react";
import {Dropdown} from "react-bootstrap";

export const ConversationDropdown = ({props}) => {
    let {
    selectedProfile
    } = props

    console.log(props)
    console.log(props.profileAbout)

    return (
        <>
            <Dropdown.Item as={"button"} onClick={() => props.profileAbout = props.profileName}>{props.profileName}</Dropdown.Item>
        </>
    )
}