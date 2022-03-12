import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button, Tabs, Tab} from "react-bootstrap";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsByPostProfileId} from "../store/posts";
import {fetchProfileByProfileId} from "../store/profiles";
import {fetchRatingsByReviewedProfileId} from "../store/ratings";
import {StarRating} from "./shared/components/StarRating";

export const Profile = ({match}) => {
    const [showEditButton, setShowEditButton] = useState(true);
    const [showEdit, setShowEdit] = useState(false)
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);
    function showEditHideButton() {
        setShowEdit(!showEdit)
        setShowEditButton(!showEditButton)
    }
    const editThisPage = () => {
        if (showEdit)
            return console.log("Edit the page")
    }
    useEffect(editThisPage)

    const sideEffects = () => {
        dispatch(fetchPostsByPostProfileId(match.params.profileId));
        dispatch(fetchProfileByProfileId(match.params.profileId));
        dispatch(fetchRatingsByReviewedProfileId(match.params.profileId));
    }
    useEffect(sideEffects, [match.params.profileId, dispatch])

    const posts = useSelector(state => (state.posts ? state.posts.filter(post => post.postProfileId === match.params.profileId) : []));
    const postsActive = posts.filter(post => post.postActive === 1)
    const postsInactive = posts.filter(post => post.postActive === 0)
    // console.log(posts)
    const profile = useSelector(state => (state.profiles ? state.profiles[0] : null));
    // console.log(profile)
    const ratings = useSelector(state => (state.ratings ? state.ratings.filter(rating => rating.ratingReviewedProfileId === match.params.profileId) : []));
    // const ratings = useSelector(state => (state.ratings ? state.ratings[0] : null));
    // console.log(ratings)
    const ratingsAmount = ratings.map(rating => rating.ratingAmount)
    // console.log(ratingsAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    // console.log(ratingsNumber)
    const ratingsAverage = function (ratingsNumber) {return Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length)}
    // console.log(ratingsAmount.length)
    // console.log(ratingsAverage(ratingsNumber))
    // console.log(ratingsNumber.length)
    const ratingReviews = ratings.map(rating => rating.ratingContent)
    // console.log(ratingReviews)
    const filteredReviews = ratingReviews.filter(entry => entry.length > 0)
    // console.log(filteredReviews)
    const reviewCount = filteredReviews.length
    // console.log(reviewCount)
    return (
            <main>
                <Container fluid>
                    {/*ProfileId Rating/Review Header*/}
                    <Row>
                        <Col xs={3}>
                            <div className={"profile-name"}>
                                {profile && (<h2>{profile.profileName}</h2>)}
                            </div>
                        {/*Clicking here does nothing*/}
                        </Col>
                        <Col xs={3}>
                            {(ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>) || <StarRating avgRating={0}/>}
                            <p>(reviews: {reviewCount})</p>
                        </Col>
                        {/*Edit Profile or Rating/Review Button*/}
                        <Col>
                            <Button href={"/message"}>Message History</Button>{}
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
                            {(auth !== null && auth.profileId === match.params.profileId && (
                                <>
                                <button className={showEditButton ? "showEditButton" : "hideEditButton"} onClick={() => showEditHideButton()}>Edit Profile</button>
                                </>
                            )) || (
                                <>
                                    <Button href={`/rating/${match.params.profileId}`}>Ratings/Reviews</Button>{}
                                </>
                            )}
                        </Col>
                    </Row>
                    {/*Posts Section*/}
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="Active Posts" id="tabs" className="mb-3">
                                <Tab eventKey="Active Posts" title="Active Posts">
                                    {/*<PostCard/>*/}
                                    {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
                                </Tab>
                                <Tab eventKey="Previous Posts" title="Previous Posts">
                                    {/*<PostCard/>*/}
                                    {postsInactive.map((post , index) =>  <PostCard post={post} key={index}/>)}
                                    {/*<p>Old Posts</p>*/}
                                </Tab>
                            </Tabs>
                            {/*2 Tabs: Active Posts & Previous Posts*/}
                            {/*Message History Button to the right (goes to message modal)*/}
                        </Col>
                    </Row>
                </Container>
            </main>
    )
}