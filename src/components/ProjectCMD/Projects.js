import React from "react";
import styled from "styled-components";
import { device } from "../../utils/responsiveness";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { defaultTheme } from "../../utils/ThemeConfig";

function Projects({ projectsVisible, theme }) {
  const projects = [
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
    {
      name: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      categories: ["Vuejs", "Js", "Firebase"],
      url: "https://github.com/",
      github: "https://github.com/",
    },
  ];

  return (
    <Wrapper visibility={projectsVisible} theme={theme}>
      {projects.map((e) => {
        return (
          <Project
            key={e.name}
            theme={theme}
            onClick={() => window.open(e.url, "_blank", "noopener,noreferrer")}
          >
            <div className="icons__row">
              <FiFolder className="folder__icon" />
              <div className="other__icons">
                <a href={e.github} target={"_blank"} rel="noreferrer">
                  <FiGithub />
                </a>
                <a href={e.url} target={"_blank"} rel="noreferrer">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <h6>{e.name}</h6>
            <p>{e.desc}</p>
            <div className="categories">
              {e.categories.map((subE) => {
                return <span key={subE}>{subE}</span>;
              })}
            </div>
          </Project>
        );
      })}
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.div`
  visibility: ${(props) => (props.visibility === true ? "visible" : "hidden")};
  transition: 1s ease;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-top: 10px;
  cursor: pointer;
  position: relative;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const Project = styled.ul`
  background: ${(props) =>
    props.theme === "light" ? "white" : `${defaultTheme.main}`};
  color: ${(props) => (props.theme === "light" ? "black" : `#ccd6f6`)};
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  text-decoration: none;

  transition: ${defaultTheme.transition};

  &:hover {
    transform: translate(0, -10px);
  }

  h6 {
    font-size: 15px;
    font-weight: 700;
  }

  p {
    font-size: 13px;
    font-weight: 400;
  }

  .categories {
    display: flex;
    column-gap: 10px;

    span {
      font-size: 11px;
      font-weight: 400;
    }
  }

  .icons__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .folder__icon {
      font-size: 40px;
      color: ${(props) =>
        props.theme === "light" ? "grey" : `${defaultTheme.text}`};
    }
    .other__icons {
      display: flex;
      column-gap: 20px;
      font-size: 25px;

      a {
        color: ${(props) => (props.theme === "light" ? "black" : `#ccd6f6`)};
        cursor: pointer;
        transition: ${defaultTheme.transition};
        &:hover {
          color: ${(props) =>
            props.theme === "light" ? "grey" : `${defaultTheme.text}`};
        }
      }
    }
  }

  border-radius: 5px;
`;
