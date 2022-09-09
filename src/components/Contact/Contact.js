import React from "react";
import { InlineWidget } from "react-calendly";
import styled from "styled-components";
import { device } from "../../utils/responsiveness";
import { darkTheme } from "../../utils/ThemeConfig";

function Contact({ theme }) {
  return (
    <Wrappper>
      <Heading theme={theme}>Schedule a meeting with me</Heading>
      <InlineWidget
        url="https://calendly.com/kzahid"
        styles={{
          height: "646px",
          padding: "",
          margin: "0",
        }}
      />
    </Wrappper>
  );
}

export default Contact;

const Wrappper = styled.div`
  width: 100%;
`;

const Heading = styled.div`
  color: ${(props) =>
    props.theme === "dark" ? `${darkTheme.lightSlate}` : "#222"};
  font-size: 40px;
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 600;
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
`;
