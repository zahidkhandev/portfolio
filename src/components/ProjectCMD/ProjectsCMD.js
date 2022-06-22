import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import styled, { keyframes } from "styled-components";
import { defaultTheme } from "../../utils/ThemeConfig";
import { ProgressBar } from "./ProgressBar";
import Projects from "./Projects";

function ProjectsCMD({ theme }) {
  const [day, setDay] = useState();
  const [date, setDate] = useState();

  const [loadedPercent, setLoadedPercent] = useState(0);

  const [cursorVisible, setCursorVisible] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [displayLoading, setDisplayLoading] = useState("block");

  const keyPress = useCallback((e) => {
    console.log("hei");
    if (e.key === "Enter") {
      setCursorVisible(false);
      setLoaderVisible(true);
      setLoadedPercent(1);

      setInterval(function () {
        setLoaderVisible(false);
        setLoadedPercent(0);
        setInterval(function () {
          setDisplayLoading("none");
          setProjectsVisible(true);
        }, 2300);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    function getDayAndDate() {
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const today = new Date();

      const localDate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      const minutes = today.getMinutes();
      const seconds = today.getSeconds().toString();
      const hour = today.getHours();

      const localDay =
        weekday[today.getDay()] +
        " " +
        months[today.getMonth()] +
        " " +
        today.getDate() +
        " " +
        `${hour < 10 ? `0${hour}` : hour}` +
        ":" +
        `${minutes < 10 ? `0${minutes}` : minutes}` +
        ":" +
        `${seconds < 10 ? `0${seconds.toString()}` : seconds.toString()}`;
      return {
        day: localDay,
        date: localDate,
      };
    }

    const object = getDayAndDate();

    setDate(object.date);
    setDay(object.day);
    return () => document.removeEventListener("keydown", keyPress);
  }, [day, date, keyPress]);

  return (
    <Wrapper theme={theme}>
      <TaskElements theme={theme}>
        <Circles>
          <Circle color="orange" />
          <Circle color="#FC8F45" />
          <Circle color="#2BC740" />
        </Circles>
      </TaskElements>
      <Content theme={theme}>
        <div>
          Last login: {day} {date}
          <br />
          Zahid-Khan-Cloud:~ zahid$ ls projects ---Press Enter---
          <EnterInput theme={theme} visibility={cursorVisible} />
        </div>
        <ProgressBar
          theme={theme}
          width={500}
          percent={loadedPercent}
          loaderVisible={loaderVisible}
          setLoaderVisible={setLoaderVisible}
          displayLoading={displayLoading}
          setDisplayLoading={setDisplayLoading}
        />
        <Projects projectsVisible={projectsVisible} theme={theme} />
      </Content>
    </Wrapper>
  );
}

export default ProjectsCMD;

const Wrapper = styled.div`
  background: ${(props) => (props.theme === "dark" ? "white" : "black")};
  height: 80vh;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

const TaskElements = styled.div`
  background: ${(props) => (props.theme === "dark" ? "#eee" : "white")};
  padding: 10px 30px;
`;

const Circles = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Circle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.color};
`;

const Content = styled.div`
  padding: 10px 30px 30px;
  color: ${(props) =>
    props.theme === "dark" ? `${defaultTheme.main}` : "white"};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: calc(100% - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px
      ${(props) => (props.theme == "light" ? "black" : "white")};

    background-color: ${(props) =>
      props.theme == "light" ? "black" : "#f5f5f5"};
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: ${(props) =>
      props.theme == "light" ? "black" : "#f5f5f5"};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme == "light" ? "white" : ` ${defaultTheme.main}`};
  }
`;

const blink = keyframes`
 0% {   opacity:0
 }
 100% {
   opacity: 100%;
  }

`;

const EnterInput = styled.span`
  background-color: ${(props) =>
    props.theme === "dark" ? `${defaultTheme.main}` : "white"};
  padding: 0 5px;
  margin: 10px 5px;
  animation: ${blink} 1s infinite steps(2);
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;
