import got React, {useEffect, useState} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";
import {Button, Container, Modal} from "react-bootstrap";
import {Post} from "./Post";
import {PostForm} from "./shared/components/PostForm";


export const Harvest = () => {

    const dispatch = useDispatch()


    const sideEffects = () => {

        dispatch(fetchPostsRatingsProfilesByPostCategory("harvest"));
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
