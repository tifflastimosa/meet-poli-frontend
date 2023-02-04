import { Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css" 
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SelectMemberCards from "./components/SelectMemberCards";
import USAMap from "react-usa-map";
import states from "./states.json";


class App extends Component {

  constructor() {
    super();
    this.state = {
      usa: []
    };
  }

  mapHandler = (event) => {
    // alert(event.target.dataset.name);
    console.log(event.target.dataset.name);
  };
  componentDidMount() {
    this.setState({ usa: [...states.data] });
  }

  statesFilling = () => {
    const something = {};
    this.state.usa.forEach((state, i) => {
      const { abbreviation, name } = state.attributes;
      let fill = "#85929E";
      // if (name.includes("k")) {
      //   fill = "#21B205";
      // } else if (name.includes("x")) {
      //   fill = "#DDAC04";
      // }

      something[abbreviation] = {
        fill,
        // clickHandler: () => alert(`Hey This is sam! ${name} is your state`)
      };
    });

    console.log(something);
    return { ...something };
  };


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

              <Nav.Link as={Link} to={"/locations"}>
                Blank
              </Nav.Link>
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
      </Routes>

    </div>
  );
}

          <body>
          <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
          </body>
    
        </div>
      );
  }




  
}
export default App;

