import React from "react";
import "../styles/Projects.css";
import VerqorImg from "../imgs/Verqor.jpg";
import ZazilImg from "../imgs/Zazil.jpg";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={VerqorImg} alt="Verqor Game" className="project-img" />
          <h3>Verqor Game & Web Platform</h3>
          <p>
            Developed a Unity Engine video game and a React web platform to
            support Verqor's market expansion. Implemented the database, game
            logic, and front-end dashboard with real-time analytics.
          </p>
          <p className="tech-used">Tech: Unity, C#, React.js, SQL</p>
          <a
            href="https://github.com/Dino-Julius/jooch-skyfall-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img src={ZazilImg} alt="Zazil App" className="project-img" />
          <h3>Zazil Mobile App & Admin Platform</h3>
          <p>
            Built a mobile e-commerce app for “Todas Brillamos” with a menstrual
            calendar, AI health chatbot (LLAMA-3), and secure Stripe payments.
            Developed an admin dashboard in React.js for order and post
            management.
          </p>
          <p className="tech-used">
            Tech: React.js, LLAMA-3 AI, Stripe, Android Studio, SQL
          </p>
          <a
            href="https://github.com/Sebastian-Espinoza-25"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
