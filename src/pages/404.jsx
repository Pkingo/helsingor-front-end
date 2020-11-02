import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
