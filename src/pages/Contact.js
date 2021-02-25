import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css";

export default function Contact () {
  return (
    <main id="contact" className="contactpage">
      <section className="contact-container">
        <h1>Contact Me:</h1>
        <ul className="contact-list">
          <a href="https://github.com/samamoo" target="_blank">
            <li className="contact-item">
              <FontAwesomeIcon className="contact-icon" icon={faGithub} />
            </li>
          </a>
          <a href="www.linkedin.com/in/samantha-fok" target="_blank">
            <li className="contact-item">
              <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
            </li>
          </a>
          <a href={`mailto: samantha.fok92@gmail.com`} target="_blank">
            <li className="contact-item">
              <FontAwesomeIcon className="contact-icon" icon={faEnvelopeSquare} />
            </li>
          </a>
          <a href="https://www.instagram.com/samfokdraws/" target="_blank">
            <li className="contact-item">
              <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
            </li>
          </a>
        </ul>        
      </section>
    </main>
  )
}