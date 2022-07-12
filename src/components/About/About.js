import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <h1 className="title">01.About</h1>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.div`
  .title {
    font-size: 30px;
    font-weight: 400;
  }
  width: 100%;
`;
