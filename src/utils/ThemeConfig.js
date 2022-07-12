import { useState } from "react";
import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  text: "#64ffda",
  background: "#0A192F",
  borderColor: "#eee",
  main: "#0A192F",
  scrollBackground: "#0A192F",
  scrollColor: "#495670",
  slate: "#8892b0",
  lightSlate: "#ccd6f6",
};

export const lightTheme = {
  text: "#0A192F",
  background: "#eee",
  main: "#0A192F",
  scrollBackground: "#eee",
  scrollColor: "black",
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
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.scrollBackground};
    background-color: ${({ theme }) => theme.scrollBackground};
  }

  ::-webkit-scrollbar {
    width: 10px;  
    background-color: lightblue;
    /* background-color: ${(props) =>
      props.theme == "light" ? "black" : "#f5f5f5"}; */
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: ${({ theme }) => theme.scrollColor}
  }
  }

  a{
    font-family: 'Source Code Pro', monospace, Tahoma, Helvetica, Roboto, sans-serif;
  }

  *{
      padding: 0;
      margin: 0;
  }

`;
