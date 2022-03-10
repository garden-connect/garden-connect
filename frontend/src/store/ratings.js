import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

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
    await dispatch(fetchRatingsByReviewedProfileId(data))
    const reviewingIds = _.uniq(_.map(getState().ratings, "ratingReviewingProfileId"))
    reviewingIds.forEach(id => dispatch(fetchRatingsByReviewedProfileId(id)));
}

export default slice.reducer