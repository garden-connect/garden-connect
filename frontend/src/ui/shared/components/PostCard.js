
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {StarRating} from "./StarRating";
import {EditPostForm} from "./EditPostForm";
import {ConversationPost} from "../../ConversationPost";

export const PostCard = ({post}) => {
    const [showEditButton, setShowEditButton] = useState(true);
    const [showEdit, setShowEdit] = useState(false)
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

    function showEditHideButton() {
        setShowEdit(!showEdit)
        setShowEditButton(!showEditButton)
    }

    return (
        <>
            <Container className="post-card-container">
            <Row className={"border border-dark rounded p-3 m-5 dirt"}>
                <Col lg={3}>
                    <h4>{post.postCategory}</h4>
                    <Image fluid className={"d-block"} src={post.postPicture}/>
                {/*Change placeholder to post.postImage*/}
                </Col>
                <Col className="card-name">
                    <Stack direction={"horizontal"} gap={3}>
                        {/*<p>{postCategory}</p><p>{postContent}</p>*/}

                        {/*<h4>{post.postCategory}</h4>*/}
                        <p><strong>{post.postTitle}</strong></p>

                        <FindProfileName/>
                        {/*{ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>}*/}
                        {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/> || <StarRating avgRating={0}/>}
                        <p>(reviews: {reviewCount})</p>
                        {/*<StarRating/>*/}
                        {/*<p className="d-flex ml-auto">{dateShort.toLocaleDateString()}</p>*/}
                        {(auth !== null && auth.profileId === post.postProfileId && (
                            <>
                                <Button className="ms-auto" onClick={() => showEditHideButton()}>{showEditButton ? "Edit Post" : "Done Editing"}</Button>
                            </>
                        )) || (auth !== null &&
                            <>
                            <ConversationPost post={post}/>
                                {/*<Button>Message Me</Button>*/}
                            </>
                        )}
                        {/*<Button>ConversationPost</Button>*/}
                    </Stack>
                    <div>
                        {(showEdit && (<EditPostForm post={post}/>)) || (post && (<h2>{post.postTitle}</h2>))}
                        {(showEdit && " ") || (post && (<p>{post.postContent}</p>))}
                        <p className="">{dateShort.toLocaleDateString()}</p>
                        {/*<h3>{title}</h3>*/}
                        {/*<p>{content}</p>*/}
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}