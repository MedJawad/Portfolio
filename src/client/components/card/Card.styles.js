import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

export const CardContainer = styled.div`
  margin: 20px auto;
  width: 60%;
  padding: 1em;
  background-color: ${(props) => (props.theme == "dark" ? "#3a3a3a" : "white")};
  color: ${(props) => (props.theme == "dark" ? "white" : "black")};
  box-shadow: 2px 2px 20px #aaaaaa;
  text-align: center;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 800px) {
    width: 80%;
    padding: 0.5em;
  }
`;
export const CardTitle = styled.span`
  font-size: 2em;
  padding: 0.5em;
  display: block;
  white-space: pre-line;
`;
export const CardDescription = styled.p``;

const animationOne = keyframes`
0% {transform: rotate(10deg);left:300px;}
36% {transform: rotate(-10deg);left:-300px;}
60% {transform: rotate(5deg);left:150px;}
85% {transform: rotate(-2deg);left:-50px;}
100% {transform: rotate(0deg);left:0px;}
`;
const fadeIn = keyframes`
0% {opacity:0;};
100% {opacity:1;};
`;

export const AnimatedCard = styled.div`
  position: relative;
  @media (min-width: 800px) {
    animation: ${(props) =>
      (props.animationNumber === 0 && css`5s ${fadeIn} ease 1`) ||
      (props.animationNumber === 1 && css`10s ${animationOne} ease 1`) ||
      "unset"};
  }
`;
