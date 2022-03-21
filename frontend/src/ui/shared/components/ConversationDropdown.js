import React from "react";
import {Dropdown} from "react-bootstrap";

export const ConversationDropdown = ({props}) => {


    return (
        <>
            <Dropdown.Item as={"button"} onClick={() => this.handleClick(props)}>{props.profileName}</Dropdown.Item>
        </>
    )
}