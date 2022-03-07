import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../store/posts";
import {PostComponents} from "./shared/components/PostComponents";


export const Home = () => {

    const posts = useSelector(state => state.posts ? state.posts : [])

    const dispatch = useDispatch()

    function sideEffects() {
        dispatch(fetchAllPosts())
    }

    useEffect(sideEffects, [dispatch])
    console.log(posts)

    return (
        <>
            <h1>Home</h1>
            {posts.map((post , index) =>  <PostComponents post={post} key={index}/>)}
        </>
    )
}