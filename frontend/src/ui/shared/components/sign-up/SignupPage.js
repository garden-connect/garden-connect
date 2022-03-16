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
                <h2 className="d-flex justify-content-center text-center description">This site is meant to build community and facilitate interaction between gardeners and homesteaders in Albuquerque, New Mexico. Take a look around by clicking on the "Harvest" or "Hands" pages to see what gardeners near you are up to; or, sign up to become part of the community!</h2>
                <h2 className="mt-5 please">{showForm ? "Please fill out the following fields to create an account" : "Sign Up Successful!, Click Below to Sign In and access all the features of Garden Connect"}</h2>
           {/* </Container>*/}

           {/*<Container>*/}
               <SignupForm setShowForm={setShowForm}/>
                {!showForm && <SigninModal/>}

           </Container>

        </>
    )
}