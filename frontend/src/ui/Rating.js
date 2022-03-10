import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button, Modal, Stack} from "react-bootstrap";
import {ReviewComponent} from "./shared/components/ReviewComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRatersRatings, fetchRatingsByReviewedProfileId} from "../store/ratings";
import {fetchProfileByProfileId} from "../store/profiles";
import {StarRating} from "./shared/components/StarRating";

export const Rating = ({match}) => {
    const [lgShow, setLgShow] = useState(true);
    const dispatch = useDispatch()

    const sideEffects = () => {
        // dispatch(fetchAllRatersRatings(match.params.ratingReviewedProfileId))
        dispatch(fetchRatingsByReviewedProfileId(match.params.ratingReviewedProfileId))
        dispatch(fetchProfileByProfileId(match.params.ratingReviewedProfileId))
    }
    // console.log(match.params.ratingReviewedProfileId)
    useEffect(sideEffects, [match.params.ratingReviewedProfileId, dispatch])

    const profile = useSelector(state => (state.profiles ? state.profiles[0] : null))
    //  Is this going to erase all my fetched profile info from fetchAllRatersRatings?????????
    const ratings = useSelector(state => (state.ratings ? state.ratings.filter(rating => rating.ratingReviewedProfileId === match.params.ratingReviewedProfileId) : []));
    // const ratings = useSelector(state => (state.ratings ? state.ratings[0] : null));
    // console.log(ratings)
    const ratingsAmount = ratings.map(rating => rating.ratingAmount)
    // console.log(ratingsAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    // console.log(ratingsNumber)
    const ratingsAverage = function (ratingsNumber) {return Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length)}
    // console.log(ratingsAmount.length)
    // console.log(ratingsAverage(ratingsNumber))
    // console.log(ratingsNumber.length)
    const ratingReviews = ratings.map(rating => rating.ratingContent)
    // console.log(ratingReviews)
    const filteredReviews = ratingReviews.filter(entry => entry.length > 0)
    // console.log(filteredReviews)
    const reviewCount = filteredReviews.length
    // console.log(reviewCount)

    // function showReadMoreButton(element){
    //     if (element.offsetHeight < element.scrollHeight ||
    //         element.offsetWidth < element.scrollWidth) {
    //         // your element has an overflow
    //         // show read more button
    //     } else {
    //         // your element doesn't have overflow
    //     }
    // }

    return (
        <>
            <main>
                <Modal
                    size={"lg"}
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby={"modal-lg"}>
                    <Modal.Header closeButton>
                        <Modal.Title id={"modal-lg"}>Ratings And Reviews</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Container fluid>
                            {/*ProfileId Rating/Review Header*/}
                            <Row>
                                <Col>
                                    <Stack direction={"horizontal"}>
                                        {profile && (<h2>{profile.profileName}</h2>)}
                                        {ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/> || <StarRating avgRating={0}/>}
                                        <p>(reviews: {reviewCount})</p>
                                    </Stack>
                                    {/*click on profileName to go to profile page. clicking on stars or number (12) does nothing.*/}
                                </Col>
                                {/*Leave Review Button*/}
                                <Col>
                                    <Button>Leave Review</Button>
                                    {/*Won't be visible when viewing your own Reviews. Pressing button opens 5 empty stars, a input text box, and a submit button*/}
                                </Col>
                            </Row>
                            {/*Review Section*/}
                            <Row>
                                <Col>
                                    {/*One Review*/}
                                    {/*[***] - Rated By: ProfileName *****<a>(10)</a> On: DateTime <br/>*/}
                                    {/*Review Content - expands if you click on arrows on right that appear next to ... \/*/}
                                    {ratings.map((review , index) =>  <ReviewComponent review={review} key={index}/>)}
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>

            </main>
        </>
    )
}