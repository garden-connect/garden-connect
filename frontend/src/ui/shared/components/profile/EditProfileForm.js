import {Button, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {StarRating} from "../StarRating";
import {PostCard} from "../PostCard";
import React from "react";

export function EditProfileForm() {
    return (
        <>
            <main>
                <Container fluid>
                    {/*ProfileId Rating/Review Header*/}
                    <Row>
                        <Col xs={3}>
                            {profile && (<h2>{profile.profileName}</h2>)}
                            {/*Clicking here does nothing*/}
                        </Col>
                        <Col xs={3}>
                            {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/> || <StarRating avgRating={0}/>}
                            <p>(reviews: {reviewCount})</p>
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
                            About Me:
                            {profile && (<p>{profile.profileAbout}</p>)}
                        </Col>
                        <Col xs={6}>
                            {/*<button className={showButton ? "showButton" : ""} onClick={}>Message History</button>*/}
                        </Col>
                    </Row>
                    {/*Posts Section*/}
                </Container>
            </main>
        </>
    )
}