import React, {useEffect} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";
import {Post} from "./Post";
export const Harvest = () => {

    const dispatch = useDispatch()

    const posts = useSelector(state => (state.posts ? state.posts : []));
    const harvestPosts = posts.filter(post => post.postCategory === "harvest")
    const postsActive = harvestPosts.filter(post => post.postActive === 1);

    const sideEffects = () => {

        dispatch(fetchPostsRatingsProfilesByPostCategory("harvest"));
        // dispatch()
    }
    useEffect(sideEffects, [dispatch])




    return (
        <>
            {/*<Post/>*/}
            {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
        </>
    );
}
