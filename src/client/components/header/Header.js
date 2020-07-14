import React from "react";
import {
  HeaderContainer,
  HeaderLinksBar,
  HeaderLink,
  BrandText,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <BrandText>Mohamed Jawad </BrandText>
      </HeaderLink>
      <HeaderLinksBar>
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/skills">Skills</HeaderLink>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
      </HeaderLinksBar>
    </HeaderContainer>
  );
};

export default Header;
