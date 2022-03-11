import React, {useEffect} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsByPostCategory} from "../store/posts";
import {Post} from "./Post";


export const Hands = () => {

    const dispatch = useDispatch()


    const sideEffects = () => {

        dispatch(fetchPostsByPostCategory("hands"));
    }
    useEffect(sideEffects, [dispatch])

    const posts = useSelector(state => (state.posts ? state.posts : []));
    const postsActive = posts.filter(post => post.postActive === 1);

    return (
        <>
            <Post/>
            {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
        </>
    );
}