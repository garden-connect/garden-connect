import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'
import {fetchProfileByProfileId} from "./profiles";

const slice = createSlice({
    name: "ratings",
    initialState: [],
    reducers: {
        setRatings: (ratings, action) => {
            // console.log(action.payload)
            if (action.payload.length > 0) {
                const filteredReviewedRatings = ratings.filter(rating => (rating.ratingReviewedProfileId !== action.payload[0].ratingReviewedProfileId))
                if (filteredReviewedRatings === ratings)
                    return [...new Set([...ratings, ...action.payload])]
                else
                    return [...new Set([...filteredReviewedRatings, ...action.payload])]
            }

            // const filteredReviewingRatings = ratings.filter(rating => (rating.ratingReviewingProfileId !== action.payload[0].ratingReviewingProfileId))
            // console.log(ratings)
            // console.log(filteredReviewedRatings)

        },
        setIndividualRating: (ratings, action) => {
            ratings.unshift(action.payload)
        }

    }
})

export const {setRatings, setIndividualRating} = slice.actions

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