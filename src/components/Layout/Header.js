import styled from "styled-components";
import { RiMoonClearFill, RiMoonClearLine } from "react-icons/ri";
import { defaultTheme, lightTheme } from "../../utils/ThemeConfig";
import { device } from "../../utils/responsiveness";

function Header({ theme, setTheme, toggleTheme }) {
  return (
    <Wrapper theme={theme}>
      <Container>
        <Logo>ZAHID</Logo>
        <SubSection>
          <Links>
            <Link theme={theme}>
              <span>01.</span> About
            </Link>
            <Link theme={theme}>
              <span>02.</span> Work
            </Link>
            <Link theme={theme}>
              <span>03.</span> Experience
            </Link>
            <Link theme={theme}>
              <span>04.</span> Contact
            </Link>
          </Links>
          <Bulb onClick={toggleTheme}>
            {theme == "dark" ? <RiMoonClearFill /> : <RiMoonClearLine />}
          </Bulb>
        </SubSection>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);
  width: auto;
  height: 60px;
  display: flex;
  align-items: stretch;
  width: 100%;
  justify-content: center;
`;

const Container = styled.div`
  width: ${defaultTheme.width};
  max-width: ${defaultTheme.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  letter-spacing: 3px;
  cursor: pointer;
  transition: ${defaultTheme.transition};
  &:hover {
    opacity: ${defaultTheme.hoverOpacity};
  }
`;

const SubSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

const Bulb = styled.div`
  font-size: 25px;
  cursor: pointer;
  transition: ${defaultTheme.transition};
  &:hover {
    opacity: ${defaultTheme.hoverOpacity};
  }
`;

const Links = styled.div`
  display: flex;
  column-gap: 30px;

  @media ${device.tablet} {
    display: none;
    visibility: hidden;
  }
`;

const Link = styled.a`
  font-size: 13px;
  font-weight: 400;
  transition: ${defaultTheme.transition};
  cursor: pointer;
  color: ${(props) =>
    props.theme == "dark" ? `#eee` : `${defaultTheme.main}`};

  span {
    font-weight: 600;
    color: ${(props) =>
      props.theme == "dark" ? `${defaultTheme.text}` : `${defaultTheme.main}`};
  }

  &:hover {
    opacity: ${defaultTheme.hoverOpacity};
  }
`;
