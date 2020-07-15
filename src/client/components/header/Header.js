import React, { useContext } from "react";
import {
  HeaderContainer,
  HeaderLinksBar,
  HeaderLink,
  BrandText,
  ToggleThemeButton,
} from "./Header.styles";
import { ThemeContext } from "../../App";

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <BrandText>Mohamed Jawad</BrandText>
      </HeaderLink>
      <HeaderLinksBar>
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/skills">Skills</HeaderLink>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
        <ToggleThemeButton onClick={toggleTheme} theme={theme}>
          {theme == "dark" ? "Light" : "Dark"}
        </ToggleThemeButton>
      </HeaderLinksBar>
    </HeaderContainer>
  );
};

export default Header;
