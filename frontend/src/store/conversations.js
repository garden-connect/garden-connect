import _ from "lodash";
import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";
import {act} from "react-dom/test-utils";



const slice = createSlice({

    name: "conversations",
    initialState: [],
    reducers: {
        getConversationsContainingProfileId: (conversations, action) => {
            return [...new Set([...conversations, ...action.payload])]
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


export const fetchConversationsContainingProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/conversation/conversationProfileId/${id}`);
    dispatch(getConversationsContainingProfileId(data))
}
export const fetchConversationsByPostId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/conversation/${id}`);
    // console.log(data)
    dispatch(getConversationsByPostId(data))
}

export default slice.reducer



