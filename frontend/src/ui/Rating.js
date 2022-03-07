import React, {useState} from "react";
import {Container, Row, Col, Button, Modal} from "react-bootstrap";
import {ReviewComponent} from "./shared/components/ReviewComponent";

export const Rating = () => {
    const [lgShow, setLgShow] = useState(true);
    // function showReadMoreButton(element){
    //     if (element.offsetHeight < element.scrollHeight ||
    //         element.offsetWidth < element.scrollWidth) {
    //         // your element has an overflow
    //         // show read more button
    //     } else {
    //         // your element doesn't have overflow
    //     }
    // }
    const ps = document.querySelectorAll('p');
    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
        }
    });
    ps.forEach(p => {
        observer.observe(p);
    });

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
                                    ProfileName *****(12)
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
                                    <ReviewComponent/>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {/*Another Review*/}
                                    {/*[*****] - Rated By: ProfileName ***<a>(5)</a> On: DateTime <br/>*/}
                                    {/*More Review Content - short review. no arrows.*/}
                                    <ReviewComponent/>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>

            </main>
        </>
    )
}