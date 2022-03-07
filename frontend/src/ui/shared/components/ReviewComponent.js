import {Col, Row, Stack} from "react-bootstrap";
import React, {useState} from "react";

// export const ReviewComponent = ({reviewComponent}) => {
    // const {name, rating, content, date} = reviewComponent
export const ReviewComponent = () => {
    const [open, setOpen] = useState(false);




    return (
        <>
            <Row className={"border border-dark p-3 m-2"}>
                <Col xs={1}>
                    <p>*****</p>
                </Col>
                <Col xs={1}>

                </Col>
                <Col>
                    <Stack direction={"horizontal"} gap={3}>
                        <p>ProfileName</p>
                        <p>***</p>
                        <p>On: Date</p>
                        {/*<p>Rated by: {name}</p><p>{rating}</p>*/}
                        {/*<p>On: {date}</p>*/}
                    </Stack>
                    <div className={"review-container"}>
                        <input type="checkbox" id="expanded"/>
                        <p className={"review-text"}>Review Content.  This is a review.  This person sucked.  I hated their tomatoes.  They were ugly.</p>
                        <label htmlFor="expanded" role="button">read more</label>
                    </div>
                </Col>
            </Row>
        </>
    );
}