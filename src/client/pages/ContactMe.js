import React, { useEffect } from "react";
import { fetchAdmins } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  return (
    <div>
      <h1>HELLO CONTACT ME</h1>
    </div>
  );
};
const loadData = (store) => {};
export default { component: Contact, loadData };
