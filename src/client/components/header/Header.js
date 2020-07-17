import React, { useContext, useState } from "react";
import {
  HeaderContainer,
  HeaderLinksBar,
  HeaderLink,
  BrandText,
  ThemedButton,
  CollapsedHeader,
  HeaderImage,
} from "./Header.styles";
import { ThemeContext } from "../../App";
import icon from "./icon.png";

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const [isVisibleIfCollapsed, setIsVisibleIfCollapsed] = useState(false);
  return (
    <React.Fragment>
      <CollapsedHeader>
        <ThemedButton
          onClick={() => {
            setIsVisibleIfCollapsed(!isVisibleIfCollapsed);
            window.scrollTo(0, 0);
          }}
        >
          &#9776;
        </ThemedButton>
      </CollapsedHeader>
      <HeaderContainer
        isVisibleIfCollapsed={isVisibleIfCollapsed}
        onClick={() => setIsVisibleIfCollapsed(!isVisibleIfCollapsed)}
      >
        <HeaderLink to="/">
          <BrandText>
            <HeaderImage image={icon} /> <span>Mohamed Jawad</span>
          </BrandText>
        </HeaderLink>
        <HeaderLinksBar>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/skills">Skills</HeaderLink>
          <HeaderLink to="/projects">Projects</HeaderLink>
          <ThemedButton onClick={toggleTheme} theme={theme}>
            {theme == "dark" ? "Light" : "Dark"}
          </ThemedButton>
        </HeaderLinksBar>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
