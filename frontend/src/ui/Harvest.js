import React from "react";
import {Container, Row, Col} from "react-bootstrap";


export const Harvest = () => {
    return(
        <>
            <main>

                <Container>
                    {/*Individual post*/}
                    <Row>
                        <Col>
                            {/*Content sits horizontally in desktop and stacks in mobile*/}
                            Profile Id and # of stars (Links to profile and ratings)
                        </Col>

                        <Col>
                            Message button
                        {/*Opens dialogue with profile of post*/}
                        </Col>
                    </Row>

                    <Row>
                         <Col>
                            Image
                         </Col>
                        <Col>
                            Post title
                            Post text
                        </Col>
                    </Row>
                </Container>
            {/*Repeat Container for more posts*/}
                <Container/>
                <Container/>
                <Container/>
            </main>
        </>
    )
};