import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faNodeJs, faReact, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
import { faGem, faDatabase } from '@fortawesome/free-solid-svg-icons';
import "./Skills.css";

export default function Skills () {
  return (
    <main id="skills" className="skillspage">
      <section className="skills-container">
        <h1>Skills</h1>

        <div className="col-container">
          <div className="three-col">
            <h4>Languages</h4>
            <ul>
              <li className="contact-item">
                <FontAwesomeIcon className="contact-icon" icon={faHtml5}/>
                HTML
              </li>
              <li className="contact-item">
                <FontAwesomeIcon className="contact-icon" icon={faCss3Alt}/>
                CSS
              </li>
              <li className="contact-item">
                <FontAwesomeIcon className="contact-icon" icon={faJsSquare}/>
                Javascript
              </li>
              <li className="contact-item">
                <FontAwesomeIcon className="contact-icon" icon={faGem}/>
                Ruby
              </li>
              <li className="contact-item">
                <FontAwesomeIcon className="contact-icon" icon={faDatabase}/>
                SQL
              </li>
            </ul>
          </div>

          <div className="three-col">
            <h4>Frameworks/Libraries</h4>
            <ul>
              <li className="contact-item">
                  <FontAwesomeIcon className="contact-icon" icon={faNodeJs}/>
                  NodeJS
              </li>
              <li className="contact-item">
                  <FontAwesomeIcon className="contact-icon" icon={faReact}/>
                  ReactJS
              </li>
              <li className="contact-item">
                  <FontAwesomeIcon className="contact-icon" icon={faBootstrap}/>
                  Bootstrap
              </li>
              <li className="contact-item">
                  <FontAwesomeIcon className="contact-icon" icon={faSass}/>
                  SCSS
              </li>
              <li className="contact-item">
                Material-UI
              </li>
              <li className="contact-item">
                ExpressJS
              </li>
              <li className="contact-item">
                JQuery
              </li>
              <li className="contact-item">
                Axios
              </li>
              <li className="contact-item">
                Ajax
              </li>
            </ul>
          </div>
          <div className="three-col">
            <h4>Databases</h4>
            <ul>
              <li className="contact-item">
                PostgreSQL
              </li>
            </ul>
          </div>
          <div className="three-col">
            <h4>Other</h4>
            <ul>
              <li className="contact-item">
                GSAP
              </li>
              <li className="contact-item">
                Adobe Illustrator
              </li>
            </ul>
          </div>
        </div>

      </section>
    </main>
  )
}