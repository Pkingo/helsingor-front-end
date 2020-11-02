import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  margin-top: auto;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  background-color: var(--gold);

  a {
    color: var(--white);
    border: 2px solid var(--white);
    padding: 0.5rem;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <Link
        rel="noreferrer noopener"
        aria-label="External to Churchdesk"
        target="_blank"
        to="https://app.churchdesk.com/login"
      >
        Login
      </Link>
    </FooterStyles>
  );
}
