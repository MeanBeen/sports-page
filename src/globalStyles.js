import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,html {
    
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
