import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  max-width: 750px;
  margin: 2rem auto;
  max-width: 750px;
  margin: 2rem auto;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default function FourOhFour() {
  return (
    <Styles>
      <h2>Noget gik galt</h2>
      <Link to="/">Kom hjem</Link>
    </Styles>
  );
}
