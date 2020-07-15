import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  color: white;
  background-color: black;
  box-shadow: 10px 10px 10px #aaaaaa;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;
export const BrandText = styled.span`
  color: white;
  font-size: 2em;
  padding: 0.5em;
  &:hover {
    color: #259eb5;
  }
`;
export const FooterLinksBar = styled.div`
  /* padding: 1em 1em; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  margin-left: auto;
`;
export const FooterLink = styled.span`
  background-image: ${(props) => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-size: contain;
  color: white;
  cursor: pointer;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 20px;
  /* padding: 13px 20px; */
  text-decoration: none;
  &:hover {
    color: #259eb5;
  }
`;
