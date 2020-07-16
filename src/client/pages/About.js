import React from "react";
import Card from "../components/card/Card";
import { useSelector } from "react-redux";

const About = () => {
  const educations = useSelector((state) => state.formations.education);
  const works = useSelector((state) => state.formations.work);

  const renderEducations = () => {
    return educations.map((e, index) => (
      <Card
        key={index}
        title={`${e.studyType} at \n ${e.institution} \n from ${e.startDate} until ${e.endDate}`}
        description={""}
      />
    ));
  };
  const renderWorks = () => {
    return works.map((w, index) => (
      <Card
        key={index}
        title={`${w.position} at \n ${w.company} \n from ${w.startDate} until ${w.endDate}`}
        description={w.summary}
      />
    ));
  };
  return (
    <div>
      <h2>Education</h2>
      {renderEducations()}
      <h2>Internships &amp; Jobs</h2>
      {renderWorks()}
    </div>
  );
};

export default { component: About };
