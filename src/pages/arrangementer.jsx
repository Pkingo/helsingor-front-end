import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

const ArrangementerStyles = styled.div`
  max-width: 750px;
  margin: 2rem auto;

  @media (max-width: 750px) {
    margin: 2rem 4rem;
  }
`;

export default function ArrangementerPage() {
  return (
    <ArrangementerStyles>
      <SEO title="Arrangementer" />
      <h2>Arrangementer</h2>
      <p>Her er ikke noget endnu</p>
    </ArrangementerStyles>
  );
}
