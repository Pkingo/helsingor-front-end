import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

const KirkeligeHandlingerStyles = styled.div`
  max-width: 750px;
  margin: 2rem auto;

  @media (max-width: 750px) {
    margin: 2rem 4rem;
  }
`;

export default function KirkeligeHandlingerPage() {
  return (
    <KirkeligeHandlingerStyles>
      <SEO title="Kirkelige handlinger" />
      <h2>Kirkelige Handlinger</h2>
      <p>Her er ikke noget endnu</p>
    </KirkeligeHandlingerStyles>
  );
}
