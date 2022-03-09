import React, {useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsByPostCategory} from "../store/posts";


export const Hands = () => {

    const dispatch = useDispatch()


    const sideEffects = () => {

        dispatch(fetchPostsByPostCategory("hands"));
    }
    useEffect(sideEffects, [dispatch])

    const posts = useSelector(state => (state.posts ? state.posts : []));
    const postsActive = posts.filter(post => post.postActive === 1);
    const postsInactive = posts.filter(post => post.postActive === 0);
    // console.log(posts)
    const profile = useSelector(state => (state.profiles ? state.profiles[0] : null));
    // // console.log(profile)
    const ratings = useSelector(state => (state.ratings ? state.ratings : []));
    // // const ratings = useSelector(state => (state.ratings ? state.ratings[0] : null));
    // // console.log(ratings)
    const ratingsAmount = ratings.map(rating => rating.ratingAmount)
    // // console.log(ratingsAmount)
    const ratingsNumber = ratingsAmount.map(x => parseInt(x, 10))
    // // console.log(ratingsNumber)
    const ratingsAverage = ratingsNumber.reduce((a,b) => a + b, 0)/ratingsNumber.length;
    const profiles = useSelector(state => state.profiles ? state.profiles : null)
    // console.log(profiles)
    const FindProfileName = () => {
        // const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        // console.log(profile)
    }

    return (
        <>
            {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
        </>
    );
}