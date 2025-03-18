import React from "react";
import "./Projects.css";

const projects = [
  { title: "News Authorship Prediction", description: "LSTM model for classifying authorship with 89% accuracy." },
  { title: "Breast Cancer Detection", description: "AI-driven tumor classification using deep learning." },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

