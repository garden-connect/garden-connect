import React, {useEffect} from "react";
import {PostCard} from "./shared/components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRatingsProfilesByPostCategory} from "../store/posts";
import {Post} from "./Post";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import love from "../images/love.png"
import love1 from "../images/give-love.png"
import NavLink from "react-bootstrap/NavLink";


export const Hands = () => {

    const auth = useSelector(state => state.auth);
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
                {auth === null && (
                    <>
                        <NavLink title="Click me!" href={"/signup"}>
                            <Button className="mt-2">New Here?</Button>
                        </NavLink>
                    </>
                )}
                <Row>
                    <Col className="d-flex justify-content-center" sm={3}>
                        <Image width="80rem" height="80rem" className="d-flex justify-content-center" src={love} alt="love"/>
                    </Col>
                    <Col sm={6}>
                    <h2 className="d-flex justify-content-center text-center">You are on the Hands page!</h2>
                    <h3 className="d-flex justify-content-center text-center">Here you will find members either in need of helping hands, or offering up their own! Message a fellow gardener to inquire about a post! </h3>
                    </Col>
                    <Col sm={3} className="d-flex justify-content-center" >
                        <Image width="80rem" height="80rem"  src={love1} alt="love1"/>
                    </Col>
                </Row>




            </Container>
            {postsActive.map((post , index) =>  <PostCard post={post} key={index}/>)}
        </>
    );
}