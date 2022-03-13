import React, {useEffect} from 'react';
import {httpConfig} from "../../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {EditProfileAboutContent} from "./EditProfileAboutContent";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileByProfileId} from "../../../../store/profiles";

export const EditProfileAboutForm = () => {

    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => (state.profiles ? state.profiles.filter(profile => profile.profileId === auth.profileId) : null))[0]

    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchProfileByProfileId(profile.profileId))
    }
    useEffect(effects, [])

    const initial = {
        profileName: `${profile.profileName}`,
        profileAbout: `${profile.profileAbout}`
    };
    console.log(profile.profileName)


    const validator = Yup.object().shape({
        profileAbout: Yup.string()
            .max(1000, "About cannot be more than one thousand characters")
    });

    const submitAbout = (values, {resetForm, setStatus}) => {
        const initialName = profile.profileName
        const aboutProfileId = auth?.profileId ?? null
        const about = {aboutProfileId, ...values, initialName}
        httpConfig.put(`/apis/profile/${auth.profileId}`, about)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        // resetForm();
                        dispatch(fetchProfileByProfileId(auth.profileId))
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={initial}
            onSubmit={submitAbout}
            validationSchema={validator}
        >
            {EditProfileAboutContent}
        </Formik>

    )
};