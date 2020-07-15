import React, { useContext } from "react";
import { BodyContainer } from "./Body.styles";
import { ThemeContext } from "../../App";

const Body = ({ children }) => {
  const theme = useContext(ThemeContext);

  return <BodyContainer theme={theme}>{children}</BodyContainer>;
};

export default Body;
