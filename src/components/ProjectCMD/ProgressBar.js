import React, { useEffect, useState } from "react";
import styled from "styled-components";

export var ProgressBar = ({
  width,
  percent,
  loaderVisible,
  theme,
  displayLoading,
  setDisplayLoading,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);

  return (
    <>
      <ProgressDiv
        style={{ width: width }}
        visibility={loaderVisible}
        theme={theme}
      >
        <Progress
          style={{ width: `${value}px` }}
          visibility={loaderVisible}
          theme={theme}
          display={displayLoading}
        >
          &nbsp;Loading...
        </Progress>
      </ProgressDiv>
      <ProjectsSpan display={displayLoading}>Projects</ProjectsSpan>
    </>
  );
};

const ProgressDiv = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "rgb(233, 233, 233)" : "grey"};
  visibility: ${(props) => (props.visibility === true ? "visible" : "hidden")};
`;

const Progress = styled.div`
  background: ${(props) => (props.theme === "dark" ? "black" : "white")};
  padding: 3px 0;
  transition: 1s ease;
  transition-delay: 1s;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  visibility: ${(props) => (props.visibility === true ? "visible" : "hidden")};
  display: ${(props) => props.display};
`;

const ProjectsSpan = styled.span`
  visibility: ${(props) => (props.display === "none" ? "visible" : "hidden")};
  font-weight: bold;
  font-size: 20px;
`;
