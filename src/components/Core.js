import React from "react";
import "../styles/Core.css";

const Core = () => {
  return (
    <section className="core" id="core">
      <div className="core-content">
        <h1>Sebastian Espinoza Farías</h1>
        <h2>Software Engineering Student</h2>
        <p>
          I am a Software Engineering student passionate about software
          and videogames development, and project management. I have
          experience developing web platforms, AI-driven systems, and mobile
          applications using technologies such as React.js, Unity, and SQL. My
          work combines technical precision with a strong sense of teamwork,
          adaptability, and leadership.
        </p>
        <div className="core-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Core;
