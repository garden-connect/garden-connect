import {Button, Col, Image, Row, Stack} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StarRating} from "./StarRating";
import {ConversationPost} from "../../Conversation";
import {EditProfileForm} from "./profile/EditProfileForm";
import {EditPostForm} from "./EditPostForm";
import {fetchConversationsByPostId} from "../../../store/conversations";

export const PostCard = ({post}) => {
    const [showEditButton, setShowEditButton] = useState(true);
    const [showEdit, setShowEdit] = useState(false)
    // const { postContent, postCategory} = post

    const dispatch = useDispatch()

    const sideEffects = () => {

        dispatch(fetchConversationsByPostId(post.postId));
        // dispatch()
    }
    useEffect(sideEffects, [post.postId, dispatch])

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
            <Row className={"border border-dark p-3 m-5"}>
                <Col lg={3}>
                    <Image fluid className={"d-block"} src={post.postPicture}/>
                {/*Change placeholder to post.postImage*/}
                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        {/*<p>{postCategory}</p><p>{postContent}</p>*/}
                        <p>{post.postCategory}</p>
                        <p><strong>{post.postTitle}</strong></p>
                        <FindProfileName/>
                        {/*{ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>}*/}
                        {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/> || <StarRating avgRating={0}/>}
                        <p>(reviews: {reviewCount})</p>
                        {/*<StarRating/>*/}
                        <p>{dateShort.toLocaleDateString()}</p>
                        {(auth !== null && auth.profileId === post.postProfileId && (
                            <>
                                <Button onClick={() => showEditHideButton()}>{showEditButton ? "Edit Post" : "Done Editing"}</Button>
                            </>
                        )) || (auth !== null &&
                            <>
                            {/*<ConversationPost post={post}/>*/}
                                <Button>Message Me</Button>
                            </>
                        )}
                        {/*<Button>ConversationPost</Button>*/}
                    </Stack>
                    <div>
                        {(showEdit && (<EditPostForm post={post}/>)) || (post && (<h2>{post.postTitle}</h2>))}
                        {(showEdit && " ") || (post && (<p>{post.postContent}</p>))}
                        {/*<h3>{title}</h3>*/}
                        {/*<p>{content}</p>*/}
                    </div>
                </Col>
            </Row>
        </>
    );
}