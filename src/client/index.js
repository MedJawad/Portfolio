import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import createStore from "../helpers/createStore";
import Axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../Routes";

const axiosInstance = Axios.create({
  baseURL: "/api",
});
const store = createStore(window.INITIAL_STATE, axiosInstance);

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
