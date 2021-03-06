import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import "./About.css";

export default function About () {
  const [focused, setFocused] = useState(false);

  window.addEventListener("scroll", bgChanger);
  function bgChanger() {
    if (this.scrollY > this.innerHeight / 1.5 && this.scrollY < this.innerHeight * 1.4) {
      setFocused(true)
      document.getElementsByClassName("aboutpage")[0].style.backgroundColor="#6E8898";
    } else {
      setFocused(false)
      document.getElementsByClassName("aboutpage")[0].style.backgroundColor="#1b2735";
    }
  }

  return (
    <main id="about" className="aboutpage">
      <section className="about-container">
      <h1 id="aboutme">About Me</h1>
        <div className="two-col">
          <img id="portrait" src="https://media-exp1.licdn.com/dms/image/C5603AQHGcsjvm92RiA/profile-displayphoto-shrink_200_200/0/1609202193871?e=1619049600&v=beta&t=4-EM0czab9XYWY5Rx_Kh40zMcCN5AHnRwsZD0bsikEw"/>
        </div>
        <div className="two-col">
          <p>Hello there, hi there, ho there! <br/>I'm Samantha and I am a full-stack web developer based in Vancouver, CA.</p>
          <p>I grew up with a passion for art and creativity. I was the kid that would draw on their napkin at the dinner table and make handmade birthday cards. This passion lead me to pursue a career in web development. I love building and designing things for the web and working on a platform that is constantly growing.</p>
          <p>My side projects include learning new languages, reading, playing video games, and drawing. Check out my <a id="inline" href="https://www.instagram.com/samfokdraws/">Instagram</a> to see some of my art!
            <div className="about-links">
              <a href="https://www.instagram.com/samfokdraws/" target="_blank">
                <li className="contact-item">
                  <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
                </li>
              </a>
              <Button variant="dark" size="lg" href="https://www.canva.com/design/DAERqDB5coE/xKwtC5gbBmRD_ClfMplaUg/view?utm_content=DAERqDB5coE&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank">Resume</Button>
            </div>
          </p>
        </div>
      </section>
    </main>
  )
}