import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    }

  * {
    box-sizing: border-box;
    }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: #0c0c0c;
    background-color: #efefef;
    width: 1220px;
    margin: 0 auto;
    }

  a {
    text-decoration: none;
    color: inherit;
    }

  ul {
    list-style: none;
    }
`;
