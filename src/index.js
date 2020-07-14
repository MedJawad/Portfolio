import express from "express";
import React from "react";
import Html from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Axios from "axios";
import Routes from "./Routes";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";

const server = express();

server.use(express.static("public"));

server.get("*", (req, res) => {
  const axiosInstance = Axios.create({});
  const store = createStore({}, axiosInstance);

  res.send(Html(req, store));
});

server.listen(3000, () => {
  console.log("Listening on port 3000...");
});
