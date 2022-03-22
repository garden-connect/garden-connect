import _ from "lodash";
import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";
import {act} from "react-dom/test-utils";
import {fetchPostByPostId} from "./posts";
import {fetchProfileByProfileId} from "./profiles";



const slice = createSlice({

    name: "conversations",
    initialState: [],
    reducers: {
        getConversationsContainingProfileId: (conversations, action) => {
            // return [...new Set([...conversations, ...action.payload])]
            if (action.payload.length > 0) {
            //     const filteredConversations = conversations.filter(conversation => (conversation.conversationId !== action.payload[0].conversationId))
            //     if (filteredConversations === conversations)
            //         return [...conversations, ...action.payload]
            //     else
            //         return [...action.payload, ...filteredConversations]
            }
                return action.payload
        },
        getConversationsByPostId: (conversations, action) => {
            // return [...new Set([...conversations, ...action.payload])]
            // console.log(action.payload)
            // console.log(conversations)
            return [...conversations, ...action.payload]
        },
    }
})

export const {getConversationsContainingProfileId, getConversationsByPostId} = slice.actions

export const fetchConversationsContainingProfileId = (id) => async (dispatch, getState) => {
    const {data} = await httpConfig(`/apis/conversation/conversationProfileId/${id}`);
    await dispatch(getConversationsContainingProfileId(data))
    const conversationSendIds = _.uniq(_.map(getState().conversations, "conversationSendProfileId"))
    const conversationReceiveIds = _.uniq(_.map(getState().conversations, "conversationReceiveProfileId"))
    conversationSendIds.forEach(id=> dispatch(fetchProfileByProfileId(id)))
    conversationReceiveIds.forEach(id => dispatch(fetchProfileByProfileId(id)))
}

export const fetchConversationsAndPosts = (id) => async (dispatch, getState) => {
    const {data} = await httpConfig(`/apis/conversation/conversationProfileId/${id}`);
    await dispatch(getConversationsContainingProfileId(data))
    const postIds = _.uniq(_.map(getState().conversations, "conversationPostId"));
    console.log(postIds)
    postIds.forEach(id => dispatch(fetchPostByPostId(id)))
}

export const fetchConversationsByPostId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/conversation/${id}`);
    dispatch(getConversationsByPostId(data))
}

export default slice.reducer



