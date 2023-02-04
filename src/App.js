import { Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css';
import LandingPage from "./components/LandingPage"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SelectMemberCards from "./components/SelectMemberCards";
import MemberPage from "./components/MemberPage"



class App extends Component {

  render() {
    return ( 
        <div className="App">
          <header>
            <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
              <Container className="container-fluid">
                <Navbar.Brand className="brand" as={Link} to={"/"}>
                  Meet Poli 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              
              <Nav className="ml-auto">

                {/* <Nav.Link as={Link} to={"/locations"}>
                  Blank
                </Nav.Link> */}
              </Nav>
              </Container>
            </Navbar>
          </header>

        <Routes>
          <Route exact path={"/"} element={
            <LandingPage />
          }/>
          <Route exact path={"/memberCards"} element={
            <SelectMemberCards />
          }/>
          <Route exact path={"/memberPage"} element={
            <MemberPage />
          }/>
        </Routes>

    </div>
  );
}

}
export default App;

