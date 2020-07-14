import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  padding: 1em 1em;
  /* background-color: #282c34; */
  background: linear-gradient(
      180deg,
      rgb(80, 160, 250) 0.3%,
      rgb(0, 100, 200) 97%
    )
    rgb(80, 160, 250);
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
  padding: 1em;
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
  padding: 1.3em;
  text-decoration: none;
  &:hover {
    color: #259eb5;
  }
`;
