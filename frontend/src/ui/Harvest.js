import React, {useEffect} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";
import {Post} from "./Post";
import {Col, Container, Row, Image, Button} from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import {fetchAuth} from "../store/auth";
// import chickey from "../images/desert_chicken2.jpg"

export const Harvest = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()


    const posts = useSelector(state => (state.posts ? state.posts : []));
    const harvestPosts = posts.filter(post => post.postCategory === "harvest")
    const postsActive = harvestPosts.filter(post => post.postActive === 1);
    const conversations = useSelector(state => (state.conversations ? state.conversations : []))
    // console.log(conversations)
    // console.log(state.conversations)

        const sideEffects = () => {

            dispatch(fetchPostsRatingsProfilesByPostCategory("harvest"));
        }
        useEffect(sideEffects, [dispatch])



        return (
            <>
                <Container>
                    {auth === null && (
                        <>
                            <NavLink title="Click me!" href={"/signup"}>
                                <Button className="mt-2">New Here?</Button>
                            </NavLink>
                        </>
                    )}
                    <Row>
                        <Col sm={12}/>
                        <h2 className="d-flex justify-content-center harvest-shadow">You are on the Harvest page!</h2>
                        <h3 className="d-flex justify-content-center text-center">Here you will find local bounty for
                            trade, sell, or giveaway. Message the member to inquire about a post! </h3>
                    </Row>


                </Container>
                {/*<Post/>*/}
                {postsActive.map((post, index) => <PostCard post={post} key={index}/>)}
            </>
        );
    }

