import React from "react";
import {Container, Row, Col, Button, Tabs, Tab} from "react-bootstrap";
import {PostComponents} from "./shared/components/PostComponents";

export const Profile = () => {
    const postInfo = [
        {name:'Sheamus', rating:'6', title:'Yall git', content:'Need some help gettin these critters off ma property, I might be mighty obliged if you could help', date:'2-22-2022'},
        {name:'Kaitlin', rating:'8.5', title:'Sweeping dirt', content:'Lots of dirt to sweep, please help', date:'1-11-1911'},
        {name:'Tim', rating:'11', title:'Need more chickens', content:'Need more chickens', date:'5-6-78'},
        {name:'Taylor', rating:'46', title:'hhhhhhhhh', content:'AAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFF FFFFF GGGGGGGGGGGGGGGGGGGGGGGGGGG', date:'00-00-0000'}

    ]
    return (
        <>
            <main>
                <Container fluid>
                    {/*ProfileId Rating/Review Header*/}
                    <Row>
                        <Col xs={5}>
                            <p>ProfileName</p>
                        {/*Clicking here does nothing*/}
                        </Col>
                        <Col xs={1}>
                            <p>*****(12)</p>
                        </Col>
                        {/*Edit Profile or Rating/Review Button*/}
                        <Col>
                            <Button variant={"secondary"}>Edit Profile</Button>
                             {/*(When viewing other profiles, it will be a Leave Review Button)*/}
                        </Col>
                    </Row>
                    {/*About Me*/}
                    <Row>
                        <Col xs={6}>
                            A quick blurb about me. 1000 characters. blaha blah blah blah
                        </Col>
                        <Col xs={6}>
                            <Button>Message History</Button>
                        </Col>
                    </Row>
                    {/*Posts Section*/}
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="Active Posts" id="tabs" className="mb-3">
                                <Tab eventKey="Active Posts" title="Active Posts">
                                    {/*<PostComponents/>*/}
                                    {postInfo.map( eachPost => <PostComponents postData={eachPost}/>)}
                                </Tab>
                                <Tab eventKey="Previous Posts" title="Previous Posts">
                                    {/*<PostComponents/>*/}
                                    {/*{postComponents.map(postComponents => <PostComponents postComponents={postComponents}/>)}*/}
                                    <p>Old Posts</p>
                                </Tab>
                            </Tabs>
                            {/*2 Tabs: Active Posts & Previous Posts*/}
                            {/*Message History Button to the right (goes to message modal)*/}
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