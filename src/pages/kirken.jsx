import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

const KirkenStyles = styled.div`
  max-width: 750px;
  margin: 2rem auto;

  @media (max-width: 750px) {
    margin: 2rem 4rem;
  }
`;

export default function KirkenPage() {
  return (
    <KirkenStyles>
      <SEO title="Kirken" />
      <h2>Kirken</h2>
      <p>Her er ikke noget endnu</p>
    </KirkenStyles>
  );
}
