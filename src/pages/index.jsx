import { useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Services from "../components/Services";
import Slideshow from "../components/Slideshow";

const ServicesStyles = styled.div`
  max-width: 740px;
  margin: 2rem auto;

  @media (max-width: 740px) {
    margin: 0 2rem;
  }
`;

export default function HomePage() {
  const {
    services: { nodes: services },
  } = useStaticQuery(query);
  return (
    <>
      <SEO title="Hjem" />
      <Slideshow />
      <ServicesStyles>
        <Services title="Arrangementer" services={services} color={"green"} />
        <Services title="Tjenester" services={services} color={"blue"} />
      </ServicesStyles>
    </>
  );
}

const query = graphql`
  query ServiceQuery {
    services: allSanityService {
      nodes {
        id
        title
        starttime
        place
        person
        endtime
      }
    }
  }
`;
