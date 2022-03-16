import React from 'react';
import {httpConfig} from "../../../../utils/http-config";
import {Formik} from "formik";
import * as Yup from "yup";
import {SigninFormContent} from "./SigninFormContent";
import {useDispatch} from "react-redux";
import jwtDecode from 'jwt-decode'
import { getAuth } from '../../../../store/auth'

export const SignInForm = (props) => {

    const {setModalShow} = props
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters")
    });


    //the initial values object defines what the request payload is.
    const signIn = {
        profileEmail: "",
        profilePassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        console.log("submitting")
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    setTimeout(() => {setModalShow(false)}, 1000 )
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
            >
                {SigninFormContent}
            </Formik>
        </>
    )
};