import React from "react";
import {Container, Row} from "react-bootstrap";
import {PostComponents} from "./shared/components/PostComponents";


export const Hands = () => {

    const postComponents = [
        {name:'Sheamus', rating:'6', title:'Yall git', content:'Need some help gettin these critters off ma property, I might be mighty obliged if you could help', date:'2-22-2022'},
        {name:'Kaitlin', rating:'8.5', title:'Sweeping dirt', content:'Lots of dirt to sweep, please help', date:'1-11-1911'},
        {name:'Tim', rating:'11', title:'Need more chickens', content:'Need more chickens', date:'5-6-78'},
        {name:'Taylor', rating:'46', title:'hhhhhhhhh', content:'AAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFF FFFFF GGGGGGGGGGGGGGGGGGGGGGGGGGG', date:'00-00-0000'}

    ]
    return(
        <>

                <div>
                    <Container>
                        {/*Individual post*/}
                        <Row>
                            {postComponents.map(postComponents => <PostComponents postComponents={postComponents}/>)}
                        </Row>
                    </Container>
                </div>
                {/*Repeat Container for more posts*/}
        </>
    )
};