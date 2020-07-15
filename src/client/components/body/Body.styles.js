import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyContainer = styled.div`
  padding: 1em 1em;
  min-height: 100vh;
  background-color: ${(props) => (props.theme == "dark" ? "#1a1a1a" : "white")};
  color: ${(props) => (props.theme == "dark" ? "white" : "black")};
  text-align: center;
  display: flex;
  justify-content: center;
`;
