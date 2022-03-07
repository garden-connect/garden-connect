import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";

const slice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        getAllPosts: (posts, action) => {
            return action.payload
        }
    }
})

export const {getAllPosts} = slice.actions

export const fetchAllPosts = () => async dispatch => {
    const {data} = await httpConfig(`/apis/post`);
    dispatch(getAllPosts(data))
}

export default slice.reducer