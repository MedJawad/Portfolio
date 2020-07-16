import React, { useContext } from "react";
import {
  CardContainer,
  CardTitle,
  CardDescription,
  AnimatedCard,
} from "./Card.styles";
import { ThemeContext } from "../../App";

const Card = ({ title, description, animationNumber }) => {
  const theme = useContext(ThemeContext);

  const camelCaseToSpace = (text) => {
    return text.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
  };

  return (
    <AnimatedCard animationNumber={animationNumber}>
      <CardContainer theme={theme}>
        <CardTitle>{camelCaseToSpace(title)}</CardTitle>
        <CardDescription> {description} </CardDescription>
      </CardContainer>
    </AnimatedCard>
  );
};

export default Card;
