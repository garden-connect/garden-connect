import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {
        setProfiles: (profiles, action) => {
            return [...new Set([...profiles, ...action.payload])]
        }
    }
})

export const {setProfiles} = slice.actions

export const fetchProfileByProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/profile/${id}`);
    dispatch(setProfiles([data]))
}

export default slice.reducer