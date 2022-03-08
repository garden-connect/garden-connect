import _ from "lodash";
import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";
import {fetchProfileByProfileId} from "./profiles";

const slice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        getAllPosts: (posts, action) => {
            return action.payload
        },
        getPostsByPostProfileId: (posts, action) => {
            return action.payload
        },
        getPostsByPostCategory: (posts, action) => {
            return action.payload
        },
        getPostByPostId: (posts, action) => {
            return action.payload
        },
    }
})

export const {getAllPosts, getPostsByPostCategory, getPostsByPostProfileId, getPostByPostId} = slice.actions

export const fetchAllPosts = () => async dispatch => {
    const {data} = await httpConfig(`/apis/post`);
    dispatch(getAllPosts(data))
}
export const fetchPostsByPostProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/post/postProfileId/${id}`);
    dispatch(getPostsByPostProfileId(data))
}
export const fetchPostsByPostCategory = (category) => async dispatch => {
    const {data} = await httpConfig(`/apis/post/postCategory/${category}`);
    dispatch(getPostsByPostCategory(data))
}
export const fetchPostByPostId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/post/${id}`);
    dispatch(getPostByPostId(data))
}
export const fetchAllPostsAndProfilesAndRatings = () => async (dispatch, getState) => {
    await dispatch(fetchAllPosts())
    const userIds = _.uniq(_.map(getState().posts, "postUserId"));
    userIds.forEach(id => dispatch(fetchProfileByProfileId(id)));

}
export default slice.reducer