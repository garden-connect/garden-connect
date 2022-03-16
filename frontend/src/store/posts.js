import _ from "lodash";
import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";
import {fetchProfileByProfileId} from "./profiles";
import {fetchRatingsByReviewedProfileId} from "./ratings";
import {fetchConversationsByPostId} from "./conversations";

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
            return [...posts, action.payload]
        },
    }
})

export const {getAllPosts, getPostsByPostCategory, getPostsByPostProfileId, getPostByPostId} = slice.actions

export const fetchAllPosts = () => async dispatch => {
    const {data} = await httpConfig(`/apis/post/`);
    // console.log(data)
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


export const fetchPostsRatingsProfilesByPostCategory = (category) => async (dispatch, getState) => {
    const {data} = await httpConfig(`/apis/post/postCategory/${category}`);
    // console.log(data)
    await dispatch(getPostsByPostCategory(data))
    const postIds = _.uniq(_.map(getState().posts, "postId"));
    postIds.forEach(id => dispatch(fetchConversationsByPostId(id)));
// console.log(postIds)
    const profileIds = _.uniq(_.map(getState().posts, "postProfileId"));
    profileIds.forEach(id => dispatch(fetchProfileByProfileId(id)));
    profileIds.forEach(id => dispatch(fetchRatingsByReviewedProfileId(id)));
}



export const fetchPostByPostId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/post/${id}`);
    dispatch(getPostByPostId(data))
}
export const fetchAllPostsAndProfilesAndRatings = () => async (dispatch, getState) => {
    await dispatch(fetchAllPosts())
    const profileIds = _.uniq(_.map(getState().posts, "postProfileId"));
    profileIds.forEach(id => dispatch(fetchProfileByProfileId(id)));
    profileIds.forEach(id => dispatch(fetchRatingsByReviewedProfileId(id)));
}
export default slice.reducer