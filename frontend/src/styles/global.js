import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }
  
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`