import React from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";


export const Hands = () => {
    return(
        <>
            <main>

                <Container className={"border py-5"}>
                    {/*Individual post*/}
                    <Row>
                        <div>
                        <Col>
                            {/*Content sits horizontally in desktop and stacks in mobile*/}
                            <h5>Sheamus #stars</h5>
                        </Col>

                        <Col align-right>

                            <Button>Message</Button>
                            {/*Opens dialogue with profile of post*/}
                        </Col>
                        </div>
                    </Row>

                    <Row>
                        <Col className={"align-top"}>
                            <Image className={"d-block mx-auto"} src="https://via.placeholder.com/200"></Image>
                        </Col>
                        <Col>
                            <h3>Looking to get some help</h3>
                            <p>Post text</p>
                        </Col>
                    </Row>
                </Container>
                {/*Repeat Container for more posts*/}

            </main>
        </>
    )
};