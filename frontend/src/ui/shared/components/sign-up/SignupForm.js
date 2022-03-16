import React from 'react';
import {httpConfig} from "../../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";

import {SignupFormContent} from "./SignupFormContent";

export const SignupForm = (setShowForm) => {
    const signUp = {
        profileEmail: "",
        profileName: "",
        profilePassword: "",
        profilePasswordConfirm: "",

    };

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profileName: Yup.string()
            .required("username is required"),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        profilePasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),

    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        setTimeout(() => {setShowForm(false)}, 10 )
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignupFormContent}
        </Formik>

    )
};