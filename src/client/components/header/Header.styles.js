import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CollapsedHeader = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
  height: 20px;
  width: 20px;
  font-size: larger;
  font-weight: bolder;
  z-index: 100;
  @media (min-width: 800px) {
    display: none;
  }
`;
export const HeaderContainer = styled.div`
  max-width: 100vw;
  padding: 0em 10vw;
  background: linear-gradient(rgb(80, 160, 250), rgb(0, 100, 200));
  box-shadow: 10px 10px 10px #aaaaaa;
  &:hover {
  }
  text-align: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: ${(props) => (props.isVisibleIfCollapsed ? "flex" : "none")};
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0em;
  }
`;
export const BrandText = styled.span`
  color: white;
  font-size: 2em;
  padding: 0em 0.5em;
  display: flex;
  flex-direction: row;
  &:hover {
    color: #259eb5;
  }
  @media (max-width: 800px) {
    justify-content: space-between;
    padding: 10% 0;
  }
`;
export const HeaderLinksBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const HeaderLink = styled(Link)`
  color: white;
  margin-left: 7px;
  padding: 0.5em 1em;
  font-size: 1.3em;
  text-decoration: none;
  &:hover {
    color: #259eb5;
  }
  @media (max-width: 800px) {
    margin: 10px auto;
  }
`;
export const ThemedButton = styled.button`
  color: ${(props) => (props.theme == "dark" ? "black" : "white")};
  background-color: ${(props) => (props.theme == "dark" ? "white" : "black")};
  margin-left: 7px;
  padding: 0.5em 1em;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 0px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0 !important;
  }
  @media (min-width: 800px) {
    &:hover {
      color: ${(props) => (props.theme == "dark" ? "white" : "black")};
      background-color: ${(props) =>
        props.theme == "dark" ? "black" : "white"};
    }
  }
`;
export const HeaderImage = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  text-align: center;
  background: ${(props) => (props.image ? css`url(${props.image})` : "unset")};
  background-repeat: no-repeat;
  background-size: cover;
`;
