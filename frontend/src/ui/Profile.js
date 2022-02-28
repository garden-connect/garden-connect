import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export const Profile = () => {
    return (
        <>
            <main>
                <Container fluid>
                    {/*ProfileId Rating/Review Header*/}
                    <Row>
                        <Col>
                            ProfileId, # of Stars, # of Reviews (link to reviews page)
                        </Col>
                        {/*Edit Profile Button*/}
                        <Col>
                            Edit Profile Button on the right side (Won't be visible when viewing other profiles)
                        </Col>
                    </Row>
                    {/*About Me*/}
                    <Row>
                        <Col>
                            A quick blurb about me. 1000 characters
                        </Col>
                    </Row>
                    {/*Posts Section*/}
                    <Row>
                        <Col>
                            2 Tabs: Active Posts & Previous Posts
                            Message History Button to the right (goes to message modal)
                        </Col>
                    </Row>
                    {/*Post Tab Content*/}
                    <Row>
                        <Col>
                            Scroll through Post content
                            Each post has Message Icon if viewing other peoples' profiles or Edit Icon if viewing own profile page
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}