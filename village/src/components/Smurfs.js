import React, { Component } from "react";

import Smurf from "./Smurf";

import styled from "styled-components";

const SmurfsList = styled.div`
  width: 90%;
  margin: 0 auto;

  h1 {
    color: #4f3bb3;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    margin: 0.5rem;
  }
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfsList>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </SmurfsList>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
