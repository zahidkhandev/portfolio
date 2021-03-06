import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { defaultTheme } from "../../utils/ThemeConfig";

function Layout({ theme, setTheme, toggleTheme, children }) {
  return (
    <Container>
      <Header theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
      {/* <Footer /> */}
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  width: ${defaultTheme.width};
  max-width: ${defaultTheme.maxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  row-gap: 50px;
`;
