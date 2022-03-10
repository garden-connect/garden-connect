import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {PostFormContent} from "./PostFormContent";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllPosts} from "../../../store/posts";

export const PostForm = () => {
    const post = {
        postContent: "",
    };

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth ? state.auth : null);
    const validator = Yup.object().shape({
        postContent: Yup.string()
            .required("post content is required"),
    });

    const submitPost = (values, {resetForm, setStatus}) => {
        const postProfileId = auth?.profileId ?? null
        const post = {postProfileId, ...values}
        httpConfig.post("/apis/post/", post)
            .then(reply => {
                let {message, type} = reply;

                if(reply.status === 200) {
                    resetForm();
                    dispatch(fetchAllPosts())
                }
                setStatus({message, type});
            }
        );
    };

    return (
        <Formik initialValues={post}
                onSubmit={submitPost}
                validationSchema={validator}
                >
            {PostFormContent}
        </Formik>
    )
};