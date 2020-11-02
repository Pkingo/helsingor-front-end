import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

const KontaktStyles = styled.div`
  max-width: 750px;
  margin: 2rem auto;

  @media (max-width: 750px) {
    margin: 2rem 4rem;
  }
`;

export default function KontaktPage() {
  return (
    <KontaktStyles>
      <SEO title="Kontakt" />
      <h2>Kontakt</h2>
      <p>Her er ikke noget endnu</p>
    </KontaktStyles>
  );
}
