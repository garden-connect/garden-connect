import React, {useEffect} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";
import {Post} from "./Post";
import {Col, Container, Row, Image, Button} from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import {fetchAuth} from "../store/auth";
import tomatoes from "../images/tomato.png"

export const Harvest = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()


    const posts = useSelector(state => (state.posts ? state.posts : []));
    const harvestPosts = posts.filter(post => post.postCategory === "harvest")
    const postsActive = harvestPosts.filter(post => post.postActive === 1);
    // console.log(conversations)
    // console.log(state.conversations)

        const sideEffects = () => {

            dispatch(fetchPostsRatingsProfilesByPostCategory("harvest"));
        }
        useEffect(sideEffects, [dispatch])



        return (
            <>
                <Container>
                    <Row>
                        <Col sm={3}>
                    {auth === null && (
                        <>
                                <Button href={"/signup"} className="m-4">New Here?</Button>
                        </>
                    )}
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={3} className="d-flex justify-content-center">
                            <Image width="80rem" height="80rem"  src={tomatoes} alt="tomatoes"/>
                        </Col>
                        <Col sm={6}>
                        <h2 className="d-flex justify-content-center text-center">You are on the Harvest page!</h2>
                        <h3 className="d-flex justify-content-center text-center">Here you will find local bounty for
                            trade, sell, or giveaway. Message the member to inquire about a post! </h3>
                            </Col>
                        <Col sm={3} className="d-flex justify-content-center" >
                            <Image width="80rem" height="80rem"  src={tomatoes} alt="tomatoes"/>
                        </Col>
                    </Row>


                </Container>
                {/*<Post/>*/}
                {postsActive.map((post, index) => <PostCard post={post} key={index}/>)}
            </>
        );
    }

