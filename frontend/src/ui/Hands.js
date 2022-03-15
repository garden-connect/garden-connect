import React, {useEffect} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";
import {Post} from "./Post";
import {Col, Container, Row} from "react-bootstrap";


export const Hands = () => {

    const dispatch = useDispatch()


    const sideEffects = () => {

        dispatch(fetchPostsRatingsProfilesByPostCategory("hands"));
    }
    useEffect(sideEffects, [dispatch])

    const posts = useSelector(state => (state.posts ? state.posts : []));
    const handsPosts = posts.filter(post => post.postCategory === "hands")
    const postsActive = handsPosts.filter(post => post.postActive === 1);

    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}/>
                    <h2 className="d-flex justify-content-center harvest-shadow">You are on the Hands page!</h2>
                    <h3 className="d-flex justify-content-center text-center">Here you will find members either in need of helping hands, or offering up their own! Message a fellow gardener to inquire about a post! </h3>
                </Row>




            </Container>
            {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
        </>
    );
}