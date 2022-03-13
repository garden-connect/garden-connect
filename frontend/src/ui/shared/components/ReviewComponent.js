import {Col, Row, Stack} from "react-bootstrap";
import React, {useCallback, useEffect, useRef, useState} from "react";
import { useSelector} from "react-redux";
import {StarRating} from "./StarRating";

export const ReviewComponent = ({review}) => {
    const [clamped, setClamped] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [moreLess, setMoreLess] = useState(true)

    function ShowReadMoreButton() {
        const inputElement = useRef(null)
        const setInputElement = useCallback(node => {
            console.log(node)
            console.log(inputElement)
            // console.log(inputElement.current)
            if (inputElement.current) {
                console.log("pass")
                // return setShowButton(false)
            }
            else if (inputElement.current !== null && (inputElement.current.offsetHeight < inputElement.current.scrollHeight ||
                inputElement.current.offsetWidth < inputElement.current.scrollWidth)) {
                return setShowButton(true)
            }
            inputElement.current = node
            console.log("change inputElement.current")
        }, [])
        return [setInputElement]
    }
    const [inputElement] = ShowReadMoreButton()

//     const inputElement = useRef(null)
// console.log(inputElement)
//
//     function ShowReadMoreButton(){
//         if
//         (inputElement.current.offsetHeight < inputElement.current.scrollHeight ||
//             inputElement.current.offsetWidth < inputElement.current.scrollWidth) {
//             return setShowButton(true)
//         } else {
//         }
//     }
//     useEffect(() => ShowReadMoreButton)


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
                {profile && <h3>{profile.profileName}</h3>}
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
                        {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>}
                        <p>(reviews: {reviewCount})</p>
                        <p>{dateShort.toLocaleDateString()}</p>
                    </Stack>
                    <div className={"rating-content"}>
                        <p ref={inputElement} className={clamped ? "clamped" : ""}>{review.ratingContent}</p>
                        <a href={"#"} className={showButton ? "showButton" : ""} onClick={handleClick}>{moreLess ? "More" : "Less"}</a>
                    </div>
                </Col>
            </Row>
        </>
    );
}