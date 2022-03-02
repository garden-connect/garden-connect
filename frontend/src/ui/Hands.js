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
                        <Col lg={6}>
                            {/*Content sits horizontally in desktop and stacks in mobile*/}
                            <h5>Sheamus (#stars)</h5>

                            <Button className={"justify-content-end"}>Message</Button>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                    </Row>
                </Container>
                {/*Repeat Container for more posts*/}

            </main>
        </>
    )
};