import React from "react";
import { MdPerson, MdPlace, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "gatsby";
import styled from "styled-components";
import { dayNames, monthNames } from "../constants/dates";
import { formatTimeInterval } from "../utils/formatDate";

const ServiceStyles = styled(Link)`
  background: ${({ color }) =>
    color === "blue" ? "rgb(115, 155, 206)" : "rgb(103, 137, 140)"};
  background: ${({ color }) =>
    color === "blue" ? "var(--blue)" : "var(--green)"};
  color: white;
  text-decoration: none;
  display: grid;
  grid-template-columns: auto auto 1fr 1fr 20px;
  grid-template-rows: auto auto;
  grid-column-gap: 2rem;
  align-items: center;
  margin: 1rem 0;

  &:hover {
    filter: brightness(0.8);
  }

  .date {
    grid-row: span 2;
    font-size: 3rem;
    border-right-width: 2px;
    border-right-color: white;
    border-right-style: solid;
    padding: 0.5rem 2rem;
    margin: 0.5rem 0;
  }
  ul {
    grid-row: span 2;
    padding-left: 0;
  }

  li {
    font-size: 1.2rem;
    list-style: none;
  }
  h2 {
    color: white;
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .detail {
    display: flex;
    font-size: 1.2rem;
  }
  svg {
    grid-row: span 2;
  }

  @media (max-width: 576px) {
    grid-template-columns: auto 1fr 1fr 20px;
    grid-template-rows: 1fr;
    h2 {
      font-size: 2rem;
    }
    ul {
      display: none;
    }
    .detail {
      display: none;
    }
  }
`;

const ServicesStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .title {
    color: ${({ color }) =>
      color === "blue" ? "rgb(115, 155, 206)" : "rgb(103, 137, 140)"};
    color: ${({ color }) =>
      color === "blue" ? "var(--blue)" : "var(--green)"};
    background: ${({ color }) =>
      color === "blue" ? "rgb(115, 155, 206)" : "rgb(103, 137, 140)"};
    border-bottom-color: ${({ color }) =>
      color === "blue" ? "var(--blue)" : "var(--green)"};
    border-bottom-style: solid;
    border-bottom-width: 0.2rem;
    line-height: 2rem;
  }
`;

function SingleService({
  title,
  starttime,
  place,
  person,
  endtime,
  id,
  color,
}) {
  const startDate = new Date(starttime);
  const endDate = new Date(endtime);
  return (
    <ServiceStyles color={color} key={id} to={`/begivenhed/${id}`}>
      <p className="date">
        {startDate.getDay() < 9 ? "0" : ""}
        {startDate.getDay() + 1}
      </p>
      <ul>
        <li>{monthNames[startDate.getMonth()]}</li>
        <li>{dayNames[startDate.getDay()]} </li>
        <li>{formatTimeInterval(startDate, endDate)}</li>
      </ul>
      <h2>{title}</h2>
      <MdKeyboardArrowRight />
      <p className="detail">
        <MdPlace />
        {place}
      </p>
      <p className="detail">
        <MdPerson />
        {person}
      </p>
    </ServiceStyles>
  );
}

const Services = ({ color, services, title }) => (
  <ServicesStyles color={color}>
    <h2 className="title">{title}</h2>
    {services.map((service) => (
      <SingleService {...service} color={color} />
    ))}
  </ServicesStyles>
);

export default Services;
