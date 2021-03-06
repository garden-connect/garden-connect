import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button, Modal, Stack} from "react-bootstrap";
import {ReviewComponent} from "./shared/components/ReviewComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRatersRatings} from "../store/ratings";
import {fetchProfileByProfileId} from "../store/profiles";
import {StarRating} from "./shared/components/StarRating";
import {ReviewForm} from "./shared/components/review/ReviewForm";

export const Rating = ({match}) => {
    const [modalShow, setModalShow] = useState(false);
    const [showForm, setShowForm] = useState(false)
    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => (state.profiles ? state.profiles.filter(profile => profile.profileId === match.profileId)[0] : null));
    const ratings = useSelector(state => (state.ratings ? state.ratings.filter(rating => rating.ratingReviewedProfileId === match.profileId) : []));
    // console.log("rating: " + ratings)
    const ratingsAmount = ratings.map(rating => rating.ratingAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    const ratingsAverage = function (ratingsNumber) {return Math.round(ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length)}
    const ratingReviews = ratings.map(rating => rating.ratingContent)
    const filteredReviews = ratingReviews.filter(entry => entry.length > 0)
    const reviewCount = filteredReviews.length

    return (
        <>
            {/*<main>*/}
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Ratings/Reviews
                </Button>
                <Modal
                    size={"lg"}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    aria-labelledby={"modal-lg"}>
                    <Modal.Header closeButton>
                        <Modal.Title id={"modal-lg"}>Ratings And Reviews</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Container fluid>
                            {/*ProfileId Rating/Review Header*/}
                            <Row>
                                <Col xs={9}>
                                    <div className={"hstack gap-3 d-flex align-items-baseline"}>
                                        {profile && (<h2>{profile.profileName}</h2>)}
                                        {(ratingsNumber.length && <StarRating avgRating={ratingsAverage(ratingsNumber)}/>) || <StarRating avgRating={0}/>}
                                        <p>(reviews: {reviewCount})</p>
                                    </div>
                                    {/*click on profileName to go to profile page. clicking on stars or number (12) does nothing.*/}
                                </Col>
                                {/*Leave Review Button*/}
                                <Col xs={3}>
                                    {(auth !== null && auth.profileId !== match.profileId && (
                                        <>
                                            <Button onClick={() => setShowForm(!showForm)}>{showForm ? "Done" : "Leave Review" }</Button>
                                        </>
                                    ))}

                                    {/*Won't be visible when viewing your own Reviews. Pressing button opens 5 empty stars, a input text box, and a submit button*/}
                                </Col>
                            </Row>
                            <Row>
                                {showForm && profile && <ReviewForm reviewedProfile={profile}/>}
                            </Row>
                            {/*Review Section*/}
                            <Row>
                                <Col>
                                    {/*Review Content - expands if you click on arrows on right that appear next to ... \/*/}
                                    {ratings.map((review) =>  <ReviewComponent review={review} key={review.ratingReviewingProfileId}/>)}
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>

            {/*</main>*/}
        </>
    )
}