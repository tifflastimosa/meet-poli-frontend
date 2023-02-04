import React from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../styling/SelectRepCards.css';

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
                                <Card classname= "memberCard">
                                    <Card.Img
                                        className="smallImage"
                                        src={"https://www.congress.gov/img/member/a000360_200.jpg"}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src="../../images/no-image-icon-23500.jpg";
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title>Name</Card.Title>
                                        <Card.Text>Party</Card.Text>
                                        {/* <Link to={"/locations/"+location.id}>
                                        Explore Location
                                        </Link> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    <br></br>
                    <h2>House of Representatives</h2>

                </div>
            </Container>
        </div>
    )
}
export default SelectMemberCards;