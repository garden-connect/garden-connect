import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
    name: "ratings",
    initialState: [],
    reducers: {
        getRatingsByReviewedProfileId: (ratings, action) => {
            ratings.push(action.payload)
        }
    }
})

export const {getRatingsByReviewedProfileId} = slice.actions

export const fetchRatingsByReviewedProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/rating/${id}`);
    dispatch(getRatingsByReviewedProfileId(data))
}

export default slice.reducer