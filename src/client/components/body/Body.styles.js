import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 1em 1em;
  min-height: 90vh;
  background-color: ${(props) => (props.theme == "dark" ? "#1a1a1a" : "white")};
  color: ${(props) => (props.theme == "dark" ? "white" : "black")};
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const BodyWidth = styled.div`
  width: ${(props) => props.bodyWidth || "100%"};
  @media (max-width: 800px) {
    width: 100%;
  }
`;
