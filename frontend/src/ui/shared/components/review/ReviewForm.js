import React, {useEffect} from 'react';
import {httpConfig} from "../../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchRatingsByReviewedProfileId} from "../../../../store/ratings";
import {ReviewFormContent} from "./ReviewFormContent";

export const ReviewForm = ({reviewedProfile}) => {

    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => (state.profiles ? state.profiles.filter(profile => profile.profileId === reviewedProfile.profileId) : null))[0]

    const dispatch = useDispatch()
    // const effects = () => {
    //     dispatch(fetchProfileByProfileId(profile.profileId))
    // }
    // useEffect(effects, [])

    const initial = {
        ratingAmount: "",
        ratingContent: ""
    };
    // console.log(initial)


    const validator = Yup.object().shape({
        ratingAmount: Yup.string()
            .required("Rating is required")
            .min(1, "Rating must be one character")
            .max(1, "Rating must be one character"),
        ratingContent: Yup.string()
            .max(1000, "Review cannot be more than one thousand characters")
    });

    const submitReview = (values, {resetForm, setStatus}) => {
        const ratingReviewingProfileId = auth?.profileId ?? null
        const ratingReviewedProfileId = reviewedProfile.profileId
        const rating = {ratingReviewingProfileId, ratingReviewedProfileId, ...values}
        httpConfig.put(`/apis/rating/${reviewedProfile.profileId}`, rating)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        // resetForm();
                        dispatch(fetchRatingsByReviewedProfileId(profile.profileId))
                    }
                    setStatus({message, type});
                }
            )
    };


    return (

        <Formik
            initialValues={initial}
            onSubmit={submitReview}
            validationSchema={validator}
        >
            {ReviewFormContent}
        </Formik>

    )
};