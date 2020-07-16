import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions";
import Card from "../components/card/Card";

const skills = () => {
  const skills = useSelector((state) => state.skills.items);
  const renderSkills = () => {
    return skills.map((s, index) => (
      <Card
        animationNumber={1}
        key={index}
        title={s.name}
        description={s.level}
      />
    ));
  };

  return <div>{renderSkills()}</div>;
};
const loadData = () => {};
export default { component: skills, loadData };
