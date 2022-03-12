import React from 'react';
import {httpConfig} from "../../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {EditProfileAboutContent} from "./EditProfileAboutContent";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileByProfileId} from "../../../../store/profiles";

export const EditProfileAboutForm = () => {

    const dispatch = useDispatch()

    const profile = useSelector(state => (state.profiles ? state.profiles[0] : null))

    const about = {
        profileAbout: `${profile.profileAbout}`
    };

    const auth = useSelector(state => state.auth? state.auth : null)

    const validator = Yup.object().shape({
        profileAbout: Yup.string()
            .max(1000, "About cannot be more than one thousand characters")
    });

    const submitAbout = (values, {resetForm, setStatus}) => {
        const aboutProfileId = auth?.profileId ?? null
        const about = {aboutProfileId, ...values}
        httpConfig.put(`/apis/profile/${auth.profileId}`, about)
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
            initialValues={about}
            onSubmit={submitAbout}
            validationSchema={validator}
        >
            {EditProfileAboutContent}
        </Formik>

    )
};