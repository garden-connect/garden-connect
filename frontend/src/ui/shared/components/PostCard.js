import {Button, Col, Image, Row, Stack} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import {StarRating} from "./StarRating";

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
    const ratings = useSelector(state => (state.ratings ? state.ratings.filter(rating => rating.ratingReviewedProfileId === post.postProfileId) : []));
    // const ratings = useSelector(state => (state.ratings ? state.ratings[0] : null));
    // console.log(ratings)
    const ratingsAmount = ratings.map(rating => rating.ratingAmount)
    // console.log(ratingsAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    // console.log(ratingsNumber)
    const ratingsAverage = function (ratingsNumber) {return Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length)}
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
            <Row className={"border border-dark p-3 m-5"}>
                <Col lg={3}>
                    <Image fluid className={"d-block"} src={"https://via.placeholder.com/200"}/>
                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        {/*<p>{postCategory}</p><p>{postContent}</p>*/}
                        <p>{post.postCategory}</p>
                        <FindProfileName/>
                        {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>}
                        <p>(reviews: {reviewCount})</p>
                        {/*<StarRating/>*/}
                        <p>{post.postDate}</p>
                        <Button>Message</Button>
                    </Stack>
                    <div>
                        <p>{post.postContent}</p>
                        {/*<h3>{title}</h3>*/}
                        {/*<p>{content}</p>*/}
                    </div>
                </Col>
            </Row>
        </>
    );
}