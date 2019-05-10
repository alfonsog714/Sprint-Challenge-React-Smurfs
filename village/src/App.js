import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

import "./App.css";
import styled from "styled-components";

// CSS Styled Components

const StlyedNav = styled.nav`
  display: flex;
  // border: 1px solid red;

  a {
    padding: 1rem;
    text-decoration: none;
    color: black;
  }

  .active {
    color: red;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        // console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <StlyedNav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </StlyedNav>

        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />

        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
