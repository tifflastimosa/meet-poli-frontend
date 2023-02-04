import React from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../styling/SelectRepCards.css';

function chooseColor(party) {
    if (party === "R") {
        return "danger"
    } else {
        return "primary"
    }
}

const SelectMemberCards = ({state, MembersByState}) => {
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
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    <br></br>
                    <h2>House of Representatives</h2>
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
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                </div>
            </Container>
        </div>
    )
}
export default SelectMemberCards;