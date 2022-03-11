import {Button, Col, Row, Stack} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRatingsByReviewedProfileId} from "../../../store/ratings";
import {StarRating} from "./StarRating";
import {fetchProfileByProfileId} from "../../../store/profiles";

// export const ReviewComponent = ({reviewComponent}) => {
    // const {name, rating, content, date} = reviewComponent
export const ReviewComponent = ({review}) => {
    const [clamped, setClamped] = useState(true);
    const [showButton, setShowButton] = useState(false);
    // const handleClick = () => setClamped(!clamped);

    const inputElement = useRef(null)

    function ShowReadMoreButton(){
        if (inputElement.current.offsetHeight < inputElement.current.scrollHeight ||
            inputElement.current.offsetWidth < inputElement.current.scrollWidth) {
            return setShowButton(!showButton)
        } else {
        }
    }
    useEffect(() => ShowReadMoreButton)

    function handleClick(e) {
        e.preventDefault();
        setClamped(!clamped)
    }


    const profiles = useSelector(state => state.profiles ? state.profiles : [])
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
                    <p>{<StarRating avgRating={review.ratingAmount}/>}</p>
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
                    <div className={"rating-content"}>
                        <p ref={inputElement} className={clamped ? "clamped" : ""}>{review.ratingContent}</p>
                        <a href={"#"} className={showButton ? "showButton" : ""} onClick={handleClick}>More</a>
                    </div>
                </Col>
            </Row>
        </>
    );
}