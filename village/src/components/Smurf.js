import React from "react";

import styled from "styled-components";

const SmurfCard = styled.div`
  width: 300px;
  padding: 1rem;
  margin-bottom: 20px;

  background: rgba(73, 155, 234, 1);
  background: -moz-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(73, 155, 234, 1) 15%,
    rgba(31, 110, 192, 1) 56%,
    rgba(18, 96, 179, 1) 69%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(73, 155, 234, 1)),
    color-stop(15%, rgba(73, 155, 234, 1)),
    color-stop(56%, rgba(31, 110, 192, 1)),
    color-stop(69%, rgba(18, 96, 179, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(73, 155, 234, 1) 15%,
    rgba(31, 110, 192, 1) 56%,
    rgba(18, 96, 179, 1) 69%
  );
  background: -o-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(73, 155, 234, 1) 15%,
    rgba(31, 110, 192, 1) 56%,
    rgba(18, 96, 179, 1) 69%
  );
  background: -ms-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(73, 155, 234, 1) 15%,
    rgba(31, 110, 192, 1) 56%,
    rgba(18, 96, 179, 1) 69%
  );
  background: linear-gradient(
    to bottom,
    rgba(73, 155, 234, 1) 0%,
    rgba(73, 155, 234, 1) 15%,
    rgba(31, 110, 192, 1) 56%,
    rgba(18, 96, 179, 1) 69%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#1260b3', GradientType=0 );
  border-radius: 10px;

  font-family: "Raleway", sans-serif;

  h3 {
    font-family: "Paytone One", sans-serif;
    color: midnightblue;
  }
`;

const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
