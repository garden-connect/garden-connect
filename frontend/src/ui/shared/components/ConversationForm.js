import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {ConversationFormContent} from "./ConversationFormContent";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllPosts} from "../../../store/posts";


export const ConversationForm = () => {

    const dispatch = useDispatch()

    const conversation = {
        conversationContent: ""
    };


    const auth = useSelector(state => state.auth ? state.auth : null);
    const validator = Yup.object().shape({
    });

    const submitConversation = (values, {resetForm, setStatus}) => {
        const conversationSendProfileId = auth?.profileId ?? null
        const conversation = {conversationSendProfileId, ...values}
        httpConfig.conversation("/apis/conversation/", conversation)
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

}