import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/card/Card";

const Projects = () => {
  const projects = useSelector((state) => state.projects.items);
  const renderProjects = () => {
    return projects.map((p, index) => (
      <a
        key={index}
        href={p.githubUrl}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Card
          animationNumber={0}
          title={p.displayName}
          description={p.summary}
        />
      </a>
    ));
  };
  return <div>{renderProjects()}</div>;
};
const loadData = (store) => {};
export default { component: Projects, loadData };
