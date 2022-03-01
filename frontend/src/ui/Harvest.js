import React from "react";
import Container from "react";
import Row from "react";
import Col from "react";


export const Harvest = () => {
    return(
        <>
            <main>
                <Container>
                    <Row>
                    {/*Individual post*/}
                        <Col>
                            {/*Content sits horizontally in desktop and stacks in mobile*/}
                            Profile Id, & date
                            {/*Header^*/}
                            Image
                            Post title
                            Post text
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {/*Individual post*/}
                        <Col>
                            {/*Content sits horizontally in desktop and stacks in mobile*/}
                            Profile Id, & date
                            Image
                            Post title
                            Post text
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {/*Individual post*/}
                        <Col>
                            {/*Content sits horizontally in desktop and stacks in mobile*/}
                            Profile Id, & date
                            Image
                            Post title
                            Post text
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
};