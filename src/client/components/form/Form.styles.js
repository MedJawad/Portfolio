import React from "react";
import styled from "styled-components";

export const Form = styled.form``;
export const FormGroup = styled.div`
  color: rgb(80, 160, 250);
  display: block;
  width: 50%;
  margin: 30px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  font-size: 1.3em;
  color: ${(props) => (props.theme == "dark" ? "papayawhip" : "#1a1a1a")};
  font-weight: bolder;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em 20px;
  color: ${(props) => (props.theme == "dark" ? "#1a1a1a" : "papayawhip")};
  background: ${(props) => (props.theme == "dark" ? "papayawhip" : "#1a1a1a")};
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 30px;
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 1.2em;
`;

export const Message = styled.textarea`
  padding: 0.5em 20px;
  color: ${(props) => (props.theme == "dark" ? "#1a1a1a" : "papayawhip")};
  background: ${(props) => (props.theme == "dark" ? "papayawhip" : "#1a1a1a")};
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 100px;
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 1.2em;
`;

export const SubmitButton = styled.button`
  color: ${(props) => (props.theme == "dark" ? "papayawhip" : "#1a1a1a")};
  background: ${(props) => (props.theme == "dark" ? "#1a1a1a" : "papayawhip")};
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 50px;
  margin: auto 10px;
  font-weight: bold;
  font-size: 1.2em;
  box-shadow: 0px 0px 30px #aaaaaa;

  cursor: pointer;
`;
