import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions";

const skills = () => {
  return (
    <div>
      <h1>HELLO SKILLS</h1>{" "}
    </div>
  );
};
const loadData = () => {};
export default { component: skills, loadData };
