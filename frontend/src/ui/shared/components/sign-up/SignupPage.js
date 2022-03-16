import React, {useState} from "react";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import {SignupForm} from "./SignupForm";
import {SigninModal} from "../sign-in/SigninModal";


export function SignUp() {

    const [showForm, setShowForm] = useState(true)
    return (
        <>

            <Container className="farm border-2 border rounded" >
                <Row>
                <h1 className="d-flex justify-content-center my-3">Welcome to Garden Connect!</h1>
                </Row>
                <h2 className="d-flex justify-content-center text-center description">This site is meant to build community and facilitate interaction between gardeners and homesteaders in Albuquerque, New Mexico. Take a look around by clicking on the "Harvest" or "Hands" pages to see what gardeners near you are up to. Or sign up below to become part of the community!</h2>
                <h2 className="mt-5 please text-center">{showForm ? "Sign up to access all features including creating posts, messaging, and writing reviews." : "Sign Up Successful! Click Below to Sign In and access all the features of Garden Connect! Then visit your new profile page, make a post, message someone about their post, or write a review!"}</h2>
           {/* </Container>*/}

           {/*<Container>*/}
                {showForm && <SignupForm setShowForm={setShowForm}/>}
                <Row className={"my-5"}>
                    <Col className={"d-flex justify-content-center"}>
                        {showForm === false && <SigninModal/>}
                    </Col>
                </Row>
           </Container>

        </>
    )
}