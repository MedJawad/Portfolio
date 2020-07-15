import React, { useContext } from "react";
import {
  CardContainer,
  CardTitle,
  CardDescription,
  AnimatedCard,
} from "./Card.styles";
import { ThemeContext } from "../../App";

const Card = ({ title, description }) => {
  const theme = useContext(ThemeContext);
  return (
    <AnimatedCard>
      <CardContainer theme={theme}>
        <CardTitle>{title}</CardTitle>
        <CardDescription> {description} </CardDescription>
      </CardContainer>
      <div></div>
    </AnimatedCard>
  );
};

export default Card;
