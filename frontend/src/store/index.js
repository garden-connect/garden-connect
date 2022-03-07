import {combineReducers} from "redux"
import posts from "./posts"
import {configureStore} from '@reduxjs/toolkit'

const reducer = combineReducers({posts})
//In order to use redux a store must be initialized and passed to the Provider component.
export const store = configureStore({reducer})