/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import { device } from "../../utils/responsiveness";
import { darkTheme, defaultTheme } from "../../utils/ThemeConfig";

function Greeting({ theme }) {
  return (
    <Wrapper>
      <Content theme={theme}>
        <h4 className="greetings">Hi,</h4>
        <h1 className="intro">I am Zahid Khan</h1>
        <h3 className="subIntro">A full stack developer</h3>
        <p className="about">
          I'm a Freshman pursuing Electronics and communication Engineering at
          Amrita Vishwa Vidyapeetam, Coimbatore. I am always ready to have new
          experiences, meet new people and learn new things. I find the idea of
          creating value for people and impacting the world through my work.
        </p>
      </Content>
      <Button theme={theme}>Get in touch!</Button>
    </Wrapper>
  );
}

export default Greeting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px - 60px);
  /* padding-top: 90px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .greetings {
    font-weight: 400;
    font-size: 20px;
    @media ${device.tablet} {
      font-size: 15px;
    }
  }
  .intro {
    color: ${(props) =>
      props.theme === "dark" ? `${darkTheme.lightSlate}` : "#222"};
    font-size: 50px;
    @media ${device.tablet} {
      font-size: 40px;
    }
    @media ${device.mobileL} {
      font-size: 30px;
    }
  }
  .subIntro {
    color: ${(props) =>
      props.theme === "dark" ? `${darkTheme.slate}` : "#444"};
    font-size: 30px;
    @media ${device.tablet} {
      font-size: 20px;
    }
  }
  .about {
    color: ${(props) =>
      props.theme === "dark" ? `${darkTheme.slate}` : "#444"};
    font-size: 15px;
    max-width: 600px;
    @media ${device.tablet} {
      font-size: 12px;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme === "dark" ? `${darkTheme.text}` : "black")};
  font-weight: 400;
  font-size: 15px;
  border: 2px solid
    ${(props) => (props.theme === "dark" ? `${darkTheme.text}` : "black")};
  padding: 15px 50px;
  margin-top: 40px;
  max-width: 200px;
  cursor: pointer;
  transition: ${defaultTheme.transition};

  :hover {
    background-color: ${(props) =>
      props.theme === "dark" ? `${darkTheme.text}` : "black"};
    opacity: ${(props) => (props.theme === "dark" ? `0.5` : "1")};
    color: ${(props) =>
      props.theme === "dark" ? `${darkTheme.main}` : "white"};
  }
`;
