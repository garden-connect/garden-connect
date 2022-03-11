import {combineReducers} from "redux"
import posts from "./posts"
import {configureStore} from '@reduxjs/toolkit'
import profiles from "./profiles";
import ratings from "./ratings";
import auth from "./auth";


const reducer = combineReducers({profiles, posts, ratings, auth})
//In order to use redux a store must be initialized and passed to the Provider component.
export const store = configureStore({reducer})