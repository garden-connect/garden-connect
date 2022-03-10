import _ from "lodash";
import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";



const slice = createSlice({
    name: "conversations",
    initialState: [],
    reducers: {
        getConversationsContainingProfileId: (conversations, action) => {
            return action.payload
        },

    }
})

export const {getConversationsContainingProfileId} = slice.actions


export const fetchConversationsContainingProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/conversation/conversationProfileId/${id}`);
    dispatch(getConversationsContainingProfileId(data))
}



