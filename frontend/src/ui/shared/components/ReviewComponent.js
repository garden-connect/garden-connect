import {Col, Row, Stack} from "react-bootstrap";
import React, {useCallback, useEffect, useRef, useState} from "react";
import { useSelector} from "react-redux";
import {StarRating} from "./StarRating";

export const ReviewComponent = ({review}) => {
    const [clamped, setClamped] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [moreLess, setMoreLess] = useState(true)


    const ref = useRef(null)
    useEffect(() => {
        if ((ref.current.offsetHeight < ref.current.scrollHeight || ref.current.offsetWidth < ref.current.scrollWidth)) {
            return setShowButton(true)
        }
    }, [ref, setShowButton])


    function handleClick(e) {
        e.preventDefault();
        setClamped(!clamped)
        setMoreLess(!moreLess)
    }

    const profiles = useSelector(state => state.profiles ? state.profiles : [])
    const FindProfileName = () => {
        const profile = profiles.find(profile => review.ratingReviewingProfileId === profile.profileId)
        return (
            <>
                {profile && <a className={"dark-a"} href={`/profile/${profile.profileId}`}>{profile.profileName}</a>}
            </>
        )
    }
    const ratersRatings = useSelector(state => (state.ratings ? state.ratings.filter(rating => rating.ratingReviewedProfileId === review.ratingReviewingProfileId) : []));
    const ratingsAmount = ratersRatings.map(rating => rating.ratingAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    const ratingsAverage = function (ratingsNumber) {return Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length)}
    const ratingReviews = ratersRatings.map(rating => rating.ratingContent)
    const filteredReviews = ratingReviews.filter(entry => entry.length > 0)
    const reviewCount = filteredReviews.length
    const dateShort = new Date(review.ratingDate)

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
                        {(ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>) || <StarRating avgRating={0}/>}
                        <p>(reviews: {reviewCount})</p>
                        <p>{dateShort.toLocaleDateString()}</p>
                    </Stack>
                    <div className={"rating-content"}>
                        <p
                            ref={ref}
                           className={clamped ? "clamped" : ""}
                        >{review.ratingContent}</p>

                        <a href={"#"} className={showButton ? "showButton" : ""} onClick={handleClick}>{moreLess ? "More" : "Less"}</a>
                    </div>
                </Col>
            </Row>
        </>
    );
}

// export const MoreOrLessButton = ({showButton, handleClick, moreLess, ShowReadMoreButton}) => {
//     ShowReadMoreButton()
//     return (<a href={"#"} className={showButton ? "showButton" : ""} onClick={handleClick}>{moreLess ? "More" : "Less"}</a>)
// }