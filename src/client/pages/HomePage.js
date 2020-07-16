import React from "react";
import { useSelector } from "react-redux";
import { ImageContainer } from "../components/image/Image.styles";

const Home = () => {
  const basics = useSelector((state) => state.basics);

  return (
    <div>
      <h1>Hello I'm {basics.name} !</h1>
      <ImageContainer image={basics.picture} />
      <h2>{basics.headline}</h2>
      <h2>A {basics.label}</h2>
      <p> {basics.summary} </p>
    </div>
  );
};

export default { component: Home };
