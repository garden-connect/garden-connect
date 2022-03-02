import {Button, Col, Image, Row, Stack} from "react-bootstrap";
import React from "react";



export const PostComponents = ({postComponents}) => {
    const {name, rating, title, content, date} = postComponents

    return (
        <>
            <Row className={"border border-dark p-3 m-5"}>
                <Col lg={3}>
                    <Image fluid className={"d-block"} src={"https://via.placeholder.com/200"}/>
                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        <p>{name}</p><p>{rating}</p>
                        <p>{date}</p>
                        <Button>Message</Button>
                    </Stack>
                    <div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </div>
                </Col>
            </Row>
        </>
    );
}