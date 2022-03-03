import React from "react";
import {Container, Row, Col, Button, Image, Stack} from "react-bootstrap";


export const Harvest = () => {
    return(
        <>
            <main>
                <h2 className={"text-center"}>Harvest</h2>
                <div>
                    <Container className={"border border-dark p-3 m-5"}>
                        {/*Individual post*/}
                        <Row>
                            <Col lg={4}>
                                <Image fluid className={"d-block mx-auto"} src="https://via.placeholder.com/200"></Image>
                            </Col>
                            <Col lg={8}>
                                <Stack  className={"justify-content-center"} direction={"horizontal"} gap={5}>
                                    {/*Content sits horizontally in desktop and stacks in mobile*/}
                                    <p>Sheamus ****(6)</p><p>2/22/2022</p><Button>Message</Button>
                                    {/*Opens dialogue with profile of post*/}
                                </Stack>

                                <div>
                                    <h3>Who wants some pickles??</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/*Repeat Container for more posts*/}

            </main>
        </>
    )
};