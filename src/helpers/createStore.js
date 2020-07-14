import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../client/reducers";

export default (initialState, axiosInstance) =>
  createStore(
    rootReducer,
    initialState || {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
