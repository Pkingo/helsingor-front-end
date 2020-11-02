import React from "react";
import styled from "styled-components";
import "normalize.css";
import Footer from "./Footer";
import Header from "./Header";
import GlobalStyles from "../styles/GlobalStyles";

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <GlobalStyles />
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </LayoutStyles>
  );
}
