import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'
import {fetchProfileByProfileId} from "./profiles";

const slice = createSlice({
    name: "ratings",
    initialState: [],
    reducers: {
        getRatingsByReviewedProfileId: (ratings, action) => {
            return action.payload
        }
    }
})

export const {getRatingsByReviewedProfileId} = slice.actions

export const fetchRatingsByReviewedProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/rating/${id}`);
    dispatch(getRatingsByReviewedProfileId(data))
}

export const fetchAllRatersRatings = (id) => async (dispatch, getState) => {
    const {data} = await httpConfig(`/apis/rating/${id}`);
    console.log(data)
    await dispatch(getRatingsByReviewedProfileId(data))
    const reviewingIds = _.uniq(_.map(getState().ratings, "ratingReviewingProfileId"))
    reviewingIds.forEach(id => dispatch(fetchProfileByProfileId(id)));
    reviewingIds.forEach(id => dispatch(fetchRatingsByReviewedProfileId(id)))
}

export default slice.reducer