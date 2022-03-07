import {Button, Col, Image, Row, Stack} from "react-bootstrap";
import React from "react";

export const PostComponents = ({post}) => {
    const { postContent, postCategory} = post

    return (
        <>
            <Row className={"border border-dark p-3 m-5"}>
                <Col lg={3}>
                    <Image fluid className={"d-block"} src={"https://via.placeholder.com/200"}/>
                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        <p>{postCategory}</p><p>{postContent}</p>
                        <Button>Message</Button>
                    </Stack>
                    <div>
                        {/*<h3>{title}</h3>*/}
                        {/*<p>{content}</p>*/}
                    </div>
                </Col>
            </Row>
        </>
    );
}