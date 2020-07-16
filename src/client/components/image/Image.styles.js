import styled, { css } from "styled-components";

export const ImageContainer = styled.div`
  width: 350px;
  height: 350px;
  margin: auto;
  box-shadow: 10px 10px 100px #509ffa;
  text-align: center;
  border-radius: 50px;
  background: ${(props) => (props.image ? css`url(${props.image})` : "unset")};
  background-repeat: no-repeat;
  background-size: cover;
`;
