
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {StarRating} from "./StarRating";
import {EditPostForm} from "./EditPostForm";
import {ConversationPost} from "../../ConversationPost";

export const PostCard = ({post}) => {
    const [showEditButton, setShowEditButton] = useState(true);
    const [showEdit, setShowEdit] = useState(false)
    const auth = useSelector(state => state.auth ? state.auth : null);

    const profiles = useSelector(state => state.profiles ? state.profiles : [])
    const FindProfileName = () => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)

            return (
                <>
                    {(auth !== null && profile && <a href={`/profile/${profile.profileId}`}>{profile.profileName}</a>) ||
                    (profile && <p>{profile.profileName}</p>)}
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

    function showEditHideButton() {
        setShowEdit(!showEdit)
        setShowEditButton(!showEditButton)
    }

    return (
        <>
            <Container className="post-card-container border border-dark rounded dirt my-5">
            <Row className="my-3">
                <Col xs={4} className={"me-auto"}>
                    <FindProfileName/>

                    {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/> || <StarRating avgRating={0}/>}
                    <p>(reviews: {reviewCount})</p>
                </Col>
                <Col xs={4} className="d-flex justify-content-center">
                    <h4>{post.postCategory}</h4>
                </Col>
                <Col xs={4}>

                    {(auth !== null && auth.profileId === post.postProfileId && (
                        <>

                            <Button className="ms-auto" onClick={() => showEditHideButton()}>{showEditButton ? "Edit Post" : "Done Editing"}</Button>

                        </>
                    )) || (auth !== null &&
                        <>
                            <ConversationPost post={post}/>
                        </>
                    )}
                </Col>
            </Row>
                <Row>
                    <Col xs={12} className="d-flex justify-content-start my-1">
                    {(showEdit && "") || (post && (<h3>{post.postTitle}</h3>))}
                    </Col>

                </Row>

                <Row>
                    {post.postPicture
                    ? <> <Col xs={3}>
                            <Image fluid src={post.postPicture}/>
                        </Col>
                        <Col xs={9}>
                            {(showEdit && (<EditPostForm post={post}/>)) || (post && (<p>{post.postContent}</p>))}
                        </Col>
                        </>:
                        <Col xs={12} className="my-1">
                            {(showEdit && (<EditPostForm post={post}/>)) || (post && (<p>{post.postContent}</p>))}
                        </Col>

                    }



                </Row>
                <Row className="my-3">
                    <Col lg={12} className="d-flex justify-content-start">
                        <p className="">{dateShort.toLocaleDateString()}</p>
                    </Col>

                </Row>
        </Container>
        </>
    );
}