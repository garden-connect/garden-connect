import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {
        setProfiles: (profiles, action) => {
            const filteredProfiles = profiles.filter(profile => profile.profileId !== action.payload[0].profileId)
            if (filteredProfiles === profiles) {
                return[...profiles, ...action.payload]
            }
            else {
                return [...action.payload, ...filteredProfiles]
            }
            // return [...new Set([...profiles, ...action.payload])]
        }
    }
})

export const {setProfiles} = slice.actions

export const fetchProfileByProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/profile/${id}`);
    dispatch(setProfiles([data]))
}

export default slice.reducer