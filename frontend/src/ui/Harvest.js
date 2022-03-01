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
                            Profile Id, & date (Links to profile and ratings)
                        </Col>
                        <Col>
                            Message button
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