import React, {useEffect} from "react";
import {Container, Row, Col, Button, Tabs, Tab} from "react-bootstrap";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsByPostProfileId} from "../store/posts";
import {fetchProfileByProfileId} from "../store/profiles";
import {fetchRatingsByReviewedProfileId} from "../store/ratings";

export const Profile = ({match}) => {
    const dispatch = useDispatch()


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
    const ratingsAverage = ratingsNumber.length && Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length);
    // console.log(ratingsAverage)
    // console.log(ratingsAmount.length)
    const ratingReviews = ratings.map(rating => rating.ratingContent)
    // console.log(ratingReviews)
    const filteredReviews = ratingReviews.filter(entry => entry.length > 0)
    // console.log(filteredReviews)
    const reviewCount = filteredReviews.length
    // console.log(reviewCount)
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
                            {ratings && (<p>{ratingsAverage}(reviews: {reviewCount})</p>)}
                            {/*{ratingsAverage}*/}
                            {/*<p>****</p>*/}
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
                            {profile && (<p>{profile.profileAbout}</p>)}
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
                                    {/*<PostCard/>*/}
                                    {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
                                </Tab>
                                <Tab eventKey="Previous Posts" title="Previous Posts">
                                    {/*<PostCard/>*/}
                                    {/*{postComponents.map(postComponents => <PostCard postComponents={postComponents}/>)}*/}
                                    {postsInactive.map((post , index) =>  <PostCard post={post} key={index}/>)}
                                    {/*<p>Old Posts</p>*/}
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