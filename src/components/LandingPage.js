import React, { Component } from "react";
import USAMap from "react-usa-map";
import states from "../states.json";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SelectMemberCards from "./SelectMemberCards";


class LandingPage extends Component {

  constructor() {
    super();
    this.state = {
      usa: []
    };
  }

  mapHandler = (event) => {
    // alert(event.target.dataset.name);
    console.log(event.target.dataset.name);
    // let navigate = useNavigate();
    // navigate("/memberCards" + event.target.dataset.name);
    // SelectMemberCards(event.target.dataset.name);
    // SelectMemberCards.setStateMem(event.target.dataset.name);
    this.routeToMembers(event);
  };

  routeToMembers = (event) => {
    let target = event.target.dataset.name;
    console.log(event.target.dataset.name);
    if (target != null) {
      console.log("routeToMembers");
      let endpoint = "http://localhost:3000/memberCards/" + event.target.dataset.name;
      console.log(endpoint);
      // window.location.href = endpoint;
      window.location.replace(endpoint);
    } 
  }

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
      <body>
        <h1>Select State</h1>
      <USAMap customize={this.statesFilling()} onClick={this.routeToMembers} />

  

      </body>
    )

  }
}

export default LandingPage;