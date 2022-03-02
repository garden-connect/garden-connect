import React from "react";
import {Container, Row, Col, Button, Tabs, Tab} from "react-bootstrap";

export const Profile = () => {
    return (
        <>
            <main>
                <Container fluid>
                    {/*ProfileId Rating/Review Header*/}
                    <Row>
                        <Col>
                            ProfileName *****<a>(12)</a>
                        {/*click on stars or number to go to rating/review page. (12) means 12 reviews written. Clicking on profileName does nothing*/}
                        </Col>
                        {/*Edit Profile Button*/}
                        <Col>
                            <Button variant={"secondary"}>Edit Profile</Button>
                             {/*(Won't be visible when viewing other profiles)*/}
                        </Col>
                    </Row>
                    {/*About Me*/}
                    <Row>
                        <Col>
                            A quick blurb about me. 1000 characters. blaha blah blah blah
                        </Col>
                    </Row>
                    {/*Posts Section*/}
                    <Row>
                        <Col sm={6}>
                            <Tabs defaultActiveKey="Active Posts" id="tabs" className="mb-3">
                                <Tab eventKey="Active Posts" title="Active Posts">
                                    <p>Post</p>
                                </Tab>
                                <Tab eventKey="Previous Posts" title="Previous Posts">
                                    <p>Old Posts</p>
                                </Tab>
                            </Tabs>
                            {/*2 Tabs: Active Posts & Previous Posts*/}
                            {/*Message History Button to the right (goes to message modal)*/}
                        </Col>
                        <Col sm={6}>
                            <Button>Message History</Button>
                        </Col>
                    </Row>
                    {/*Post Tab Content*/}
                    <Row>
                        <Col>
                            {/*Scroll through Post content. Each post has Message Icon if viewing other peoples' profiles or Edit Icon if viewing own profile page*/}
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}