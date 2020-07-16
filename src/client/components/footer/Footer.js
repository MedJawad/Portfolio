import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import {
  FooterContainer,
  BrandText,
  FooterLinksBar,
  FooterLink,
} from "./Footer.styles";
const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <FooterContainer>
      <BrandText>Mohamed Jawad Aatafay © 2020</BrandText>
      <FooterLinksBar>
        <a href="https://github.com/MedJawad">
          <FooterLink icon="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></FooterLink>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-jawad-aatafay-219265167/">
          <FooterLink icon="https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png"></FooterLink>
        </a>
        <a href="https://www.facebook.com/aatafay/">
          <FooterLink icon="https://image.flaticon.com/icons/svg/124/124010.svg"></FooterLink>
        </a>
      </FooterLinksBar>
    </FooterContainer>
  );
};

export default Footer;
