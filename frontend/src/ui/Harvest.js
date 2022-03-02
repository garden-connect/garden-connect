import React from "react";
import {Container, Row, Col, Button, Image} from "react-bootstrap";


export const Harvest = () => {
    return(
            <>
                <main>

                    <Container fluid className={"border-rounded py-5 m-3"}>
                        {/*Individual post*/}
                        <Row>
                            <Col lg={4} className={"text-center"}>
                                {/*Content sits horizontally in desktop and stacks in mobile*/}
                                <h5>Sheamus ****</h5>
                            </Col>
                            <Col lg={6} ><p>2/22/2022</p></Col>
                            <Col lg={2} className={"justify-content-end"}>

                                <Button>Message</Button>
                                {/*Opens dialogue with profile of post*/}
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Image lg={3} className={"d-block mx-auto"} src="https://via.placeholder.com/200"></Image>
                            </Col>
                            <Col lg={9} className={"px-5 mx-auto"}>
                                <h3>Anybody want my pickles??</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                        </Row>
                    </Container>
                    {/*Repeat Container for more posts*/}

                </main>
            </>
    )
};