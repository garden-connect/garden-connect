import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {PostFormContent} from "./PostFormContent";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllPosts} from "../../../store/posts";


export const PostForm = () => {
    const dispatch = useDispatch()

    const post = {
        postContent: "",
        postTitle: "",
        postCategory: "",
        postPicture: ""
    };


    const auth = useSelector(state => state.auth ? state.auth : null);
    const validator = Yup.object().shape({
        postContent: Yup.string()
            .required("post content is required")
            .max(512, "post content cannot exceed 512 characters"),
        postTitle: Yup.string()
            .required("post title is required")
            .max(50, "post title cannot exceed 50 characters"),
        postCategory: Yup.string()
            .required("post category is required"),
        postPicture: Yup.mixed()
    });

    function submitPost (values, {resetForm, setStatus}) {

        const postProfileId = auth?.profileId ?? null
        const post = {postProfileId, postActive: 1, ...values}
        const submitPostWithImage = (submitPost) => {

            httpConfig.post("/apis/post/", post)
                .then(reply => {
                        let {message, type} = reply;

                        if (reply.status === 200) {
                            resetForm();

                        }
                        setStatus({message, type});
                        return (reply)
                    }
                );
        }
            if (values.postPicture !== "") {
                httpConfig.post(`/apis/image-upload/`, values.postPicture)
                    .then(reply => {
                            let {message, type} = reply;

                            if (reply.status === 200) {
                                submitPostWithImage({...values, postPicture: message})
                                dispatch(fetchAllPosts())
                            } else {
                                setStatus({message, type});
                            }
                        }
                    );
            } else {
                submitPostWithImage(...post);
            }
        }
    return (
        <Formik initialValues={post}
                onSubmit={submitPost}
                validationSchema={validator}
                >
            {PostFormContent}
        </Formik>
    )
};