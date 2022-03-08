import {Button, Col, Image, Row, Stack} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";

export const PostCard = ({post}) => {
    // const { postContent, postCategory} = post
    const profiles = useSelector(state => state.profiles ? state.profiles : null)
    // console.log(profiles)
    const FindProfileName = () => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        // console.log(profile)
        return (
            <>
                {profile && <h3>{profile.profileName}</h3>}
            </>
        )
    }

    return (
        <>
            <Row className={"border border-dark p-3 m-5"}>
                <Col lg={3}>
                    <Image fluid className={"d-block"} src={"https://via.placeholder.com/200"}/>
                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        {/*<p>{postCategory}</p><p>{postContent}</p>*/}
                        <p>{post.profileName}</p>
                        <p>{post.postCategory}</p>
                        <p>{post.postDate}</p>
                        <Button>Message</Button>
                    </Stack>
                    <div>
                        <p>{post.postContent}</p>
                        {/*<h3>{title}</h3>*/}
                        {/*<p>{content}</p>*/}
                    </div>
                    <div>
                        <FindProfileName/>
                    </div>
                </Col>
            </Row>
        </>
    );
}