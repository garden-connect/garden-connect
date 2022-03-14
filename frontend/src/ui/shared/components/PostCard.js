import {Button, Col, Image, Row, Stack} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import {StarRating} from "./StarRating";

export const PostCard = ({post}) => {
    // const { postContent, postCategory} = post

    const auth = useSelector(state => state.auth ? state.auth : null);

    const profiles = useSelector(state => state.profiles ? state.profiles : [])
    const FindProfileName = () => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {/*{profile && <h3>{profile.profileName}</h3>}*/}
                {profile && <a href={`/profile/${profile.profileId}`}>{profile.profileName}</a>}
            </>
        )
    }
    const ratings = useSelector(state => (state.ratings ? state.ratings.filter(rating => rating.ratingReviewedProfileId === post.postProfileId) : []));
    const ratingsAmount = ratings.map(rating => rating.ratingAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    const ratingsAverage = function (ratingsNumber) {return Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length)}
    const ratingReviews = ratings.map(rating => rating.ratingContent)
    const filteredReviews = ratingReviews.filter(entry => entry.length > 0)
    const reviewCount = filteredReviews.length
    const dateShort = new Date(post.postDate)

    return (
        <>
            <Row className={"border border-dark p-3 m-5"}>
                <Col lg={3}>
                    <Image fluid className={"d-block"} src={"https://via.placeholder.com/200"}/>
                {/*Change placeholder to post.postImage*/}
                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        {/*<p>{postCategory}</p><p>{postContent}</p>*/}
                        <p>{post.postCategory}</p>
                        <FindProfileName/>
                        {/*{ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>}*/}
                        {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/> || <StarRating avgRating={0}/>}
                        <p>(reviews: {reviewCount})</p>
                        {/*<StarRating/>*/}
                        <p>{dateShort.toLocaleDateString()}</p>
                        {(auth !== null && auth.profileId === post.postProfileId && (
                            <>
                            <Button>Edit Post</Button>
                            </>
                        )) || (auth !== null &&
                            <>
                            <Button>Message</Button>
                            </>
                        )}
                        {/*<Button>Message</Button>*/}
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