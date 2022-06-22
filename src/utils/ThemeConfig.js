import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  text: "#64ffda",
  background: "#0A192F",
  borderColor: "#eee",
  main: "#0A192F",
};

export const lightTheme = {
  text: "#0A192F",
  background: "#eee",
  main: "#0A192F",
};

export const defaultTheme = {
  padding: "20px",
  maxWidth: "1200px",
  width: "90%",
  main: "#0A192F",
  text: "#64ffda",
  transition: "all 200ms ease-in-out",
  hoverOpacity: 0.7,
};

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Source Code Pro', monospace, Tahoma, Helvetica, Roboto, sans-serif;
    transition: all 200ms linear;
  }

  a{
    font-family: 'Source Code Pro', monospace, Tahoma, Helvetica, Roboto, sans-serif;
  }

  *{
      padding: 0;
      margin: 0
  }
`;
