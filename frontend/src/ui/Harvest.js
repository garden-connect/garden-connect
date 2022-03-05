import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import {PostComponents} from "./shared/components/PostComponents";


// export const Harvest = () => {
//     return(
//         <>
//             <main>
//                 <h2 className={"text-center"}>Harvest</h2>
//                 <div>
//                     <Container className={"border border-dark p-3 m-5"}>
//                         {/*Individual post*/}
//                         <Row>
//                             <Col lg={4}>
//                                 <Image fluid className={"d-block mx-auto"} src="https://via.placeholder.com/200"></Image>
//                             </Col>
//                             <Col lg={8}>
//                                 <Stack  className={"justify-content-center"} direction={"horizontal"} gap={5}>
//                                     {/*Content sits horizontally in desktop and stacks in mobile*/}
//                                     <p>Sheamus ****(6)</p><p>2/22/2022</p><Button>Message</Button>
//                                     {/*Opens dialogue with profile of post*/}
//                                 </Stack>
//
//                                 <div>
//                                     <h3>Who wants some pickles??</h3>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//                 {/*Repeat Container for more posts*/}
//
//             </main>
//         </>
//     )
// };
export const Harvest = () => {

    const postData = [
        {name:'Sheamus', rating:'6', title:'Yall git', content:'Need some help gettin these critters off ma property, I might be mighty obliged if you could help', date:'2-22-2022'},
        {name:'Kaitlin', rating:'8.5', title:'Sweeping dirt', content:'Lots of dirt to sweep, please help', date:'1-11-1911'},
        {name:'Tim', rating:'11', title:'Need more chickens', content:'Need more chickens', date:'5-6-78'},
        {name:'Taylor', rating:'46', title:'hhhhhhhhh', content:'AAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFF FFFFF GGGGGGGGGGGGGGGGGGGGGGGGGGG', date:'00-00-0000'}

    ]
    return(
        <>
            <h2 className={"text-center"}>Harvest</h2>
            <Button>Create Post</Button>
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