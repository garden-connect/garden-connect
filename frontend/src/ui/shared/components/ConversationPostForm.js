import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {ConversationFormContent} from "./ConversationFormContent";
import {useSelector, useDispatch} from "react-redux";
import {fetchConversationsContainingProfileId} from "../../../store/conversations";


export const ConversationPostForm = ({post}) => {

    const dispatch = useDispatch()

    const initial = {
        conversationContent: ""
    };


    const auth = useSelector(state => state.auth ? state.auth : null);


    const validator = Yup.object().shape({
        conversationContent: Yup.string()
            .max(2000, "Message cannot be more than two thousand characters")
    });

    const submitConversation = (values, {resetForm, setStatus}) => {

        const conversationSendProfileId = auth?.profileId ?? null
        const conversationReceiveProfileId = post.postProfileId
        const conversationPostId = post.postId
        const conversation = {conversationSendProfileId, conversationReceiveProfileId, conversationPostId, ...values}
        httpConfig.post("/apis/conversation/", conversation)

            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        dispatch(fetchConversationsContainingProfileId(auth.profileId))
                    }
                    setStatus({message, type});
                }
            );
    };

    return (
        <Formik initialValues={initial}
                onSubmit={submitConversation}
                validationSchema={validator}
        >
            {ConversationFormContent}
        </Formik>
    )

}