import {combineReducers} from "redux"
import posts from "./posts"
import {configureStore} from '@reduxjs/toolkit'
import profiles from "./profiles";

const reducer = combineReducers({profiles, posts})
//In order to use redux a store must be initialized and passed to the Provider component.
export const store = configureStore({reducer})