import {Col, Row, Stack} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRatingsByReviewedProfileId} from "../../../store/ratings";
import {StarRating} from "./StarRating";
import {fetchProfileByProfileId} from "../../../store/profiles";

// export const ReviewComponent = ({reviewComponent}) => {
    // const {name, rating, content, date} = reviewComponent
export const ReviewComponent = ({review}) => {
    // const [open, setOpen] = useState(false);

    const dispatch = useDispatch()

    const sideEffects = () => {
        // dispatch(fetchAllRatersRatings(match.params.ratingReviewedProfileId))

        dispatch(fetchRatingsByReviewedProfileId(review.ratingReviewedProfileId))
        dispatch(fetchProfileByProfileId(review.ratingReviewedProfileId))
    }
    // console.log(match.params.ratingReviewedProfileId)
    useEffect(sideEffects, [review.ratingReviewedProfileId, dispatch])


    const profiles = useSelector(state => state.profiles ? state.profiles : null)
    const FindProfileName = () => {
        const profile = profiles.find(profile => review.ratingReviewingProfileId === profile.profileId)
        // console.log(profile)
        return (
            <>
                {profile && <h3>{profile.profileName}</h3>}
            </>
        )
    }
    const ratersRatings = useSelector(state => (state.ratings ? state.ratings.filter(rating => rating.ratingReviewedProfileId === review.ratingReviewingProfileId) : []));
    // const ratings = useSelector(state => (state.ratings ? state.ratings[0] : null));
    // console.log(ratings)
    const ratingsAmount = ratersRatings.map(rating => rating.ratingAmount)
    // console.log(ratingsAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    // console.log(ratingsNumber)
    const ratingsAverage = function (ratingsNumber) {return Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length)}
    // console.log(ratingsAverage)
    // console.log(ratingsAmount.length)
    const ratingReviews = ratersRatings.map(rating => rating.ratingContent)
    // console.log(ratingReviews)
    const filteredReviews = ratingReviews.filter(entry => entry.length > 0)
    // console.log(filteredReviews)
    const reviewCount = filteredReviews.length
    // console.log(reviewCount)

    return (
        <>
            <Row className={"border border-dark p-3 m-2"}>
                <Col xs={1}>
                    <p>{review.ratingAmount}</p>
                </Col>
                <Col xs={1}>

                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        <FindProfileName/>
                        {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>}
                        <p>(reviews: {reviewCount})</p>
                        <p>{review.ratingDate}</p>
                        {/*<p>Rated by: {name}</p><p>{rating}</p>*/}
                        {/*<p>On: {date}</p>*/}
                    </Stack>
                    <div>
                        <p>{review.ratingContent}</p>
                    </div>
                </Col>
            </Row>
        </>
    );
}