import React, { useCallback } from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import StateData from "../services/state"


import '../styling/SelectRepCards.css';

function chooseColor(party) {
    if (party === "R") {
        return "danger"
    } else {
        return "primary"
    }
}

const SelectMemberCards = ({state, MembersByState}) => {
    let navigate = useNavigate();

    let params = useParams();
    console.log("params: " + params.id);
    const [stateMem, setStateMem] = useState({
        state: ""
    })

    const [house, setHouse] = useState({
        members: []
    });

    const getMembers = useCallback(() => {
        console.log("useCallback")
        if (params.id) {
        StateData.getHouseRepsByState(params.id)
            .then(response=> {
                console.log(response.data)
                // setHouse(response.data.members);
                console.log("House")
                // console.log(house);
                house.members = response.data;
                console.log(house);
                // console.log("House - members.members")
                // console.log(house.members.members)
                // setTrips([...trips, response.data]);
                // console.log(trips);
            })
            .catch(e => {
                console.log(e);
                })
            }
    }, [params.id])

    // const getMembers = useCallback(() => {
    //     StateData.getHouseRepsByState(id)
    //         .then(response => {
    //             console.log("response")
    //             console.log(response.data)
    //             console.log("house")
    //             setHouse(response.data)
    //             console.log(house.members)
    //             console.log(house)
    //         }}, [params.id]);

    useEffect(() => {
        getMembers();
    }, [getMembers])


    return (
        <div className= "App">
            <Container className= "main-container">
                <div className="membersPage">
                    <h1>Members of State</h1>
                    <br></br>
                    <h2>Senate</h2>
                        <Row className= "cardsRow">
                            <Col key= "cardsCol">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.congress.gov/img/member/a000360_200.jpg" 
                                    onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src="../../images/no-image-icon-23500.jpg";
                                        }} />
                                <Card.Body>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                    Party
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => navigate("/memberPage")}>Learn more</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    <br></br>
                    <h2>House of Representatives</h2>
                    <Row className= "cardsRow">
                    <Row className= "cardsRow">
                            <Col key= "cardsCol">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.congress.gov/img/member/a000360_200.jpg" 
                                    onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src="../../images/no-image-icon-23500.jpg";
                                        }} />
                                <Card.Body>
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                    Party
                                    </Card.Text>
                                    <Button variant="danger" onClick={() => navigate("/memberPage")}>Learn more</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
{/*                         
                        { house.members.members.map((member) => {
                            return(
                                
                                <Col key= {member.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.congress.gov/img/member/_200.jpg"
                                        onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src="../../images/no-image-icon-23500.jpg";
                                            }} />
                                    <Card.Body>
                                        <Card.Title>{member.name}</Card.Title>
                                        <Card.Text>
                                        Party
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => navigate("/memberPage")}>Learn more</Button>
                                    </Card.Body>
                                    </Card>
                                // </Col>
                        )
                            })} */}
                        </Row>
                </div>
            </Container>
        </div>
    )
}
export default SelectMemberCards;