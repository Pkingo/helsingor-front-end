import React from "react";
import { MdPerson, MdPlace } from "react-icons/md";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import styled from "styled-components";
import { formatTimeInterval } from "../utils/formatDate";
import { monthNames } from "../constants/dates";

const EventStyles = styled.div`
  max-width: 750px;
  margin: 2rem auto;

  @media (max-width: 750px) {
    margin: 2rem 4rem;
  }
`;

export default function EventPage({ data }) {
  const { title, starttime, endtime, place, person } = data.event;
  const startDate = new Date(starttime);
  const endDate = new Date(endtime);
  return (
    <>
      <SEO title={title} />
      <EventStyles>
        <h2>{title}</h2>
        <div>
          <p className="date">
            {`${startDate.getDay() < 9 ? "0" : ""}${startDate.getDay() + 1} ${
              monthNames[startDate.getMonth()]
            } ${formatTimeInterval(startDate, endDate)}`}
          </p>
          <div>
            <p className="detail">
              <MdPlace />
              {place}
            </p>
            <p className="detail">
              <MdPerson />
              {person}
            </p>
          </div>
        </div>
      </EventStyles>
    </>
  );
}

export const query = graphql`
  query EventQuert($id: String!) {
    event: sanityService(id: { eq: $id }) {
      title
      starttime
      endtime
      place
      person
    }
  }
`;
