import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollapsedHeader = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: larger;
  font-weight: bolder;

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
  }
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
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
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
export const ThemedButton = styled.button`
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
