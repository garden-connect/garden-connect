import React from 'react';
import {httpConfig} from "../../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {EditProfileNameContent} from "./EditProfileNameContent";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileByProfileId} from "../../../../store/profiles";

export const EditProfileNameForm = () => {

    const dispatch = useDispatch()

    const profile = useSelector(state => (state.profiles ? state.profiles[0] : null))

    const name = {
        profileName: `${profile.profileName}`
    };

    const auth = useSelector(state => state.auth? state.auth : null)

    const validator = Yup.object().shape({
        profileName: Yup.string()
            .required("username is required")
            .min(1, "Password must be at least one character")
    });

    const submitName = (values, {resetForm, setStatus}) => {
        const nameProfileId = auth?.profileId ?? null
        const name = {nameProfileId, ...values}
        httpConfig.put(`/apis/profile/${auth.profileId}`, name)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        dispatch(fetchProfileByProfileId(auth.profileId))
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={name}
            onSubmit={submitName}
            validationSchema={validator}
        >
            {EditProfileNameContent}
        </Formik>

    )
};