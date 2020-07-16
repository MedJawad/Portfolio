import React from "react";

import HomePage from "./client/pages/HomePage";
import SkillsPage from "./client/pages/Skills";
import App from "./client/App";
import ProjectsPage from "./client/pages/Projects";
import AboutPage from "./client/pages/About";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...AboutPage,
        path: "/about",
        exact: true,
      },
      {
        ...SkillsPage,
        path: "/skills",
      },
      {
        ...ProjectsPage,
        path: "/projects",
      },
    ],
  },
];
