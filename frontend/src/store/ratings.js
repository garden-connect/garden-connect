import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'
import {fetchProfileByProfileId} from "./profiles";

const slice = createSlice({
    name: "ratings",
    initialState: [],
    reducers: {
        setRatings: (ratings, action) => {
            return [...new Set([...ratings, ...action.payload])]
            //return existing ratings in the action payload, check for duplicates, want the unique profile ids from that
            //google unique elements in array javascript. "set"
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