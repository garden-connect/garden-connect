import React, {useEffect} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";


export const Hands = () => {

    const dispatch = useDispatch()


    const sideEffects = () => {

        dispatch(fetchPostsRatingsProfilesByPostCategory("hands"));
    }
    useEffect(sideEffects, [dispatch])

    const posts = useSelector(state => (state.posts ? state.posts : []));
    const postsActive = posts.filter(post => post.postActive === 1);

    return (
        <>
            {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
        </>
    );
}