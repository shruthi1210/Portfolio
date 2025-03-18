import React from "react";
import "./Skills.css";

const skillsList = [
  "Python", "R", "SQL", "TensorFlow", "PyTorch", "Machine Learning",
  "Big Data", "AWS", "GCP", "Power BI", "Tableau"
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

