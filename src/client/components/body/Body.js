import React, { useContext } from "react";
import { BodyContainer, BodyWidth } from "./Body.styles";
import { ThemeContext } from "../../App";

const Body = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <BodyContainer theme={theme}>
      <BodyWidth bodyWidth="60%">{children}</BodyWidth>
    </BodyContainer>
  );
};

export default Body;
