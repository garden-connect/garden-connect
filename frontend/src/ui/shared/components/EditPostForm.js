import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {PostFormContent} from "./PostFormContent";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllPosts} from "../../../store/posts";
import {EditPostFormContent} from "./EditPostFormContent";


export const EditPostForm = ({post}) => {

    const dispatch = useDispatch()
    console.log(post)

    const initial = {
        postContent: `${post.postContent}`,
        postTitle: `${post.postTitle}`,
    };


    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        postContent: Yup.string()
            .required("post content is required")
            .max(512, "post max is no more than 512 characters"),
        postTitle: Yup.string()
            .required("post title is required")
            .max(50, "post title no more than 50 characters"),
    });

    const submitPost = (values, {resetForm, setStatus}) => {
        const postProfileId = auth?.profileId ?? null
        const postCategory = post.postCategory
        const postPicture = post.postPicture
        const newPost = {postProfileId, postActive: 1, postCategory, postPicture, ...values}
        httpConfig.put(`/apis/post/${post.postId}`, newPost)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        // resetForm();
                        dispatch(fetchAllPosts())
                    }
                    setStatus({message, type});
                }
            );
    };

    return (
        <Formik initialValues={initial}
                onSubmit={submitPost}
                validationSchema={validator}
        >
            {EditPostFormContent}
        </Formik>
    )
};