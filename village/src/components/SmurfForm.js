import React, { Component } from "react";

import styled from "styled-components";

const FormDiv = styled.div`
  width: 30%;
  margin: 200px auto;
  height: 300px;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  button {
    width: 50%;
    margin: 0 auto;
    background: #5752dc;
    padding: 0.7rem;
    border: none;
    font-family: "Raleway", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 7px;

    &:hover {
      cursor: pointer;
      background: #6762fa;
      color: white;
    }
  }
`;

const InputStyle = styled.input`
  padding: 0.6rem;
  background: none;
  border-style: none;
  border-bottom: 2px solid black;
  margin: 10px 0;
  font-size: 1.2rem;
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormDiv>
        <FormStyle onSubmit={this.addSmurf}>
          <InputStyle
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <InputStyle
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <InputStyle
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </FormStyle>
      </FormDiv>
    );
  }
}

export default SmurfForm;
