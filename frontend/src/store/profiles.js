import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {
        getProfileByProfileId: (profiles, action) => {
            profiles.push(action.payload)
        }
    }
})

export const {getProfileByProfileId} = slice.actions

export const fetchProfileByProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/profile/profileId/${id}`);
    dispatch(getProfileByProfileId(data))
}

export default slice.reducer