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
  return (
    <AnimatedCard animationNumber={animationNumber}>
      <CardContainer theme={theme}>
        <CardTitle>{title}</CardTitle>
        <CardDescription> {description} </CardDescription>
      </CardContainer>
    </AnimatedCard>
  );
};

export default Card;
