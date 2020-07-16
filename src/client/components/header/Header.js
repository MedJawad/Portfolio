import React, { useContext, useState } from "react";
import {
  HeaderContainer,
  HeaderLinksBar,
  HeaderLink,
  BrandText,
  ThemedButton,
  CollapsedHeader,
} from "./Header.styles";
import { ThemeContext } from "../../App";

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const [isVisibleIfCollapsed, setIsVisibleIfCollapsed] = useState(false);
  return (
    <React.Fragment>
      <CollapsedHeader>
        <ThemedButton
          onClick={() => setIsVisibleIfCollapsed(!isVisibleIfCollapsed)}
        >
          &#9776;
        </ThemedButton>
      </CollapsedHeader>
      <HeaderContainer isVisibleIfCollapsed={isVisibleIfCollapsed}>
        <HeaderLink to="/">
          <BrandText>Mohamed Jawad</BrandText>
        </HeaderLink>
        <HeaderLinksBar>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/skills">Skills</HeaderLink>
          <HeaderLink to="/projects">Projects</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
          <ThemedButton onClick={toggleTheme} theme={theme}>
            {theme == "dark" ? "Light" : "Dark"}
          </ThemedButton>
        </HeaderLinksBar>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
