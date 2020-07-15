import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  padding: 0em 1rem;
  /* background-color: #282c34; */
  background: linear-gradient(rgb(80, 160, 250), rgb(0, 100, 200));
  box-shadow: 10px 10px 10px #aaaaaa;
  &:hover {
  }
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
export const HeaderLinksBar = styled.div`
  /* padding: 1em 1em; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
export const HeaderLink = styled(Link)`
  color: white;
  margin-left: 7px;
  padding: 1em;
  font-size: 1.3em;
  text-decoration: none;
  &:hover {
    color: #259eb5;
  }
`;
export const ToggleThemeButton = styled.button`
  color: ${(props) => (props.theme == "dark" ? "black" : "white")};
  background-color: ${(props) => (props.theme == "dark" ? "white" : "black")};
  margin-left: 7px;
  padding: 1em;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 0px;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.theme == "dark" ? "white" : "black")};
    background-color: ${(props) => (props.theme == "dark" ? "black" : "white")};
  }
  &:focus {
    outline: 0 !important;
  }
`;
