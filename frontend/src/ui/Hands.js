import React, {useState} from "react";
import {Button, Col, Container, Modal, ModalBody, Row} from "react-bootstrap";
import {PostComponents} from "./shared/components/PostComponents";

export const Hands = () => {

    const postData = [
        {name:'Sheamus', rating:'6', title:'Yall git', content:'Need some help gettin these critters off ma property, I might be mighty obliged if you could help', date:'2-22-2022'},
        {name:'Kaitlin', rating:'8.5', title:'Sweeping dirt', content:'Lots of dirt to sweep, please help', date:'1-11-1911'},
        {name:'Tim', rating:'11', title:'Need more chickens', content:'Need more chickens', date:'5-6-78'},
        {name:'Taylor', rating:'46', title:'hhhhhhhhh', content:'AAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFF FFFFF GGGGGGGGGGGGGGGGGGGGGGGGGGG', date:'00-00-0000'}

    ]
    function NewPost() {
        const [lgShow, setLgShow] = useState(false);
        return (
            <>
                <Button onClick={() => setLgShow(true)}>Create Post</Button>
                <Container fluid>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Write a post!
                        </Modal.Title>
                    </Modal.Header>
                    <ModalBody>
                        <Row>
                                <input></input>
                            <Col lg={3}><Button >Create</Button></Col>
                        </Row>
                    </ModalBody>
                </Modal>
                </Container>
            </>
        );
    }
    return(
        <>
                <h2 className={"text-center"}>Hands</h2>

                <NewPost>Create Post</NewPost>

                <div>
                    <Container fluid>
                        {/*Individual post*/}

                            {postData.map(eachPost => <PostComponents postData={eachPost}/>)}

                    </Container>
                </div>
                {/*Repeat Container for more posts*/}
            </>
    )
};