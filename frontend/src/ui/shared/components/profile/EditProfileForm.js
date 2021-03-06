import React, {useEffect} from 'react';
import {httpConfig} from "../../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {EditProfileContent} from "./EditProfileContent";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileByProfileId} from "../../../../store/profiles";

export const EditProfileForm = () => {

    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => (state.profiles ? state.profiles.filter(profile => profile.profileId === auth.profileId) : null))[0]

    const dispatch = useDispatch()
    // const effects = () => {
    //     dispatch(fetchProfileByProfileId(profile.profileId))
    // }
    // useEffect(effects, [])

    const initial = {
        profileName: `${profile.profileName}`,
        profileAbout: `${profile.profileAbout}`
    };
    // console.log(initial)


    const validator = Yup.object().shape({
        profileName: Yup.string()
            .required("username is required")
            .min(1, "Name must be at least one character"),
        profileAbout: Yup.string()
            .max(1000, "About cannot be more than one thousand characters")
    });

    const submitName = (values, {resetForm, setStatus}) => {
        const nameProfileId = auth?.profileId ?? null
        const profile = {nameProfileId, ...values}
        httpConfig.put(`/apis/profile/${auth.profileId}`, profile)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        // resetForm();
                        dispatch(fetchProfileByProfileId(auth.profileId))
                    }
                    setStatus({message, type});
                }
            )
    };


    return (

        <Formik
            initialValues={initial}
            onSubmit={submitName}
            validationSchema={validator}
        >
            {EditProfileContent}
        </Formik>

    )
};