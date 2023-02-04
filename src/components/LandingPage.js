import React, { Component } from "react";
import USAMap from "react-usa-map";
import states from "../states.json";

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
      <body>
        <h1>Select State</h1>
      <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
      </body>
    )

  }
}

export default LandingPage;