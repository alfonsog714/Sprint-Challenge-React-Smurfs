import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

import "./App.css";

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
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/add">Add a Smurf</NavLink>
        </nav>

        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />

        <Route
          exact
          path="/add"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
