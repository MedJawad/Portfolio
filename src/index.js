import express from "express";
import Html from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Axios from "axios";
import Routes from "./Routes";
import { matchRoutes } from "react-router-config";

const server = express();

server.use(express.static("public"));

server.get("*", (req, res) => {
  const axiosInstance = Axios.create({
    baseURL: "https://gitconnected.com/v1/portfolio/medjawad",
  });
  const store = createStore({}, axiosInstance);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(Html(req, store));
  });
});

server.listen(3000, () => {
  console.log("Listening on port 3000...");
});
