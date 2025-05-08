import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; 
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-email">sebesp2003@gmail.com</p>
      <div className="contact-icons">
        <a href="https://github.com/Sebastian-Espinoza-25" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-ef25" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="/assets/CV-Sebastian-Espinoza-Farias.pdf" target="_blank" rel="noopener noreferrer" title="View CV">
          <FaFilePdf size={28} />
        </a>
      </div>
      <p className="cv-note">You can also view or download my CV above.</p>
    </section>
  );
};

export default Contact;
