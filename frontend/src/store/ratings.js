import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'
import {fetchProfileByProfileId} from "./profiles";

const slice = createSlice({
    name: "ratings",
    initialState: [],
    reducers: {
        setRatings: (ratings, action) => {
            let filteredRatings
            if (action.payload.length) {
            filteredRatings = ratings.filter(rating => (rating.ratingReviewedProfileId !== action.payload[0].ratingReviewedProfileId) && (rating.ratingReviewingProfileId !== action.payload[0].ratingReviewingProfileId))
            } else {
                return ratings
            }
            if (filteredRatings !== ratings) {
                return [...new Set([...ratings, ...action.payload])]
            } else {
                return [...ratings, ...action.payload]
            }
    // return (action.payload)
        }
    }
})

export const {setRatings} = slice.actions

export const fetchRatingsByReviewedProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/rating/${id}`);
    dispatch(setRatings(data))
}

export const fetchAllRatersRatings = (id) => async (dispatch, getState) => {
    const {data} = await httpConfig(`/apis/rating/${id}`);
    // console.log(data)
    await dispatch(setRatings(data))
    const reviewingIds = _.uniq(_.map(getState().ratings, "ratingReviewingProfileId"))
    reviewingIds.forEach(id => dispatch(fetchProfileByProfileId(id)));
    reviewingIds.forEach(id => dispatch(fetchRatingsByReviewedProfileId(id)))
}

export default slice.reducer