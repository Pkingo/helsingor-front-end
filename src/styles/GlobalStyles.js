import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --gold: rgb(174, 126, 75);
    --red: rgb(177, 89, 75);
    --blue: rgb(115, 155, 206);
    --pink: rgb(173, 123, 151);
    --green: rgb(103, 137, 140);

  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: var(--gold); 
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: rgb(177, 89, 75) white;
    scrollbar-color: var(--red) white;
  }
  body::-webkit-scrollbar-track {
    background: white
  }
  body::-webkit-scrollbar-thumb {
    background-color: rgb(177, 89, 75);
    border-radius: 6px;
    border: 3px solid white
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
