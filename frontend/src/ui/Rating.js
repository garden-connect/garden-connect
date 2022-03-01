import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export const Rating = () => {
    return (
        <>
            <main>
                <Container fluid>
                    {/*ProfileId Rating/Review Header*/}
                    <Row>
                        <Col>
                            ProfileId, Star Rating, # of Reviews (not a link)
                        </Col>
                        {/*Leave Review Button*/}
                        <Col>
                            Leave Review Button on the right side (Won't be visible when viewing your own Reviews)
                        </Col>
                    </Row>
                    {/*Review Section*/}
                    <Row>
                        <Col>
                            Scroll through Review content
                            Each Review has Star Rating followed by "Rated By: Profile Id, Star Rating, # of Reviews (link to their Review page)" followed by "On: DateTime"
                            Review Content - expands if you click on arrows on right that appear next to ...
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}