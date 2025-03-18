import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Shruthi Nanditha Ganesh</h1>
        <h2>Data Scientist | AI Researcher | ML Engineer</h2>
        <p>Turning raw data into meaningful insights.</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;

