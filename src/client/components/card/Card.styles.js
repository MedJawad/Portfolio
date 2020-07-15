import styled from "styled-components";
import { keyframes } from "styled-components";

export const CardContainer = styled.div`
  margin: 20px auto;
  padding: 1rem;
  background-color: ${(props) => (props.theme == "dark" ? "#3a3a3a" : "white")};
  color: ${(props) => (props.theme == "dark" ? "white" : "black")};
  box-shadow: 2px 2px 20px #aaaaaa;
  text-align: center;
  animation: 4s ${animation} ease-out infinite;
  &:hover {
    transform: scale(1.2);
  }
`;
export const CardTitle = styled.span`
  font-size: 2em;
  padding: 0.5em;
`;
export const CardDescription = styled.p``;

const animation = keyframes`
0% {transform: rotate(10deg);left:300px;}
50% {transform: rotate(-10deg);left:-300px;}
100% {transform: rotate(10deg);left:300px;}
`;
export const AnimatedCard = styled.div`
  position: relative;
  animation: 13s ${animation} ease infinite;
`;
