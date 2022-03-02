import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

export const Rating = () => {
    return (
        <>
            <main>
                <Container fluid>
                    {/*ProfileId Rating/Review Header*/}
                    <Row>
                        <Col>
                            ProfileName *****<a>(12)</a>
                            {/*click on profileName to go to profile page. clicking on stars or number (12) does nothing.*/}
                        </Col>
                        {/*Leave Review Button*/}
                        <Col>
                            <Button>Leave Review</Button>
                           {/*(Won't be visible when viewing your own Reviews)*/}
                        </Col>
                    </Row>
                    {/*Review Section*/}
                    <Row>
                        <Col>
                            Review: Star Rating followed by "Rated By: Profile Id, Star Rating, # of Reviews (link to their Review page)" followed by "On: DateTime"
                            Review Content - expands if you click on arrows on right that appear next to ...
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}