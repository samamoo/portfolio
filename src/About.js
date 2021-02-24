import React from "react";
import "./About.css";

export default function About () {
  return (
    <main id="about" className="aboutpage">
      <section className="about-container">
      <h1 id="aboutme">About Me</h1>
        <div className="two-col">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQHGcsjvm92RiA/profile-displayphoto-shrink_200_200/0/1609202193871?e=1619049600&v=beta&t=4-EM0czab9XYWY5Rx_Kh40zMcCN5AHnRwsZD0bsikEw"/>
        </div>
        <div className="two-col">
          <p>Hello there, hi there, ho there! <br/>I'm Samantha and I am a full-stack web developer based in Vancouver, CA.</p>
          <p>I grew up with a passion for art and creativity. I was the kid that would draw on their napkin at the dinner table and make handmade birthday cards. This passion lead me to pursue a career in web development. I love building and designing things for the web and working on a platform that is constantly growing.</p>
          <p>My side projects include learning new languages, reading, playing video games, and drawing. Check out my <a id="inline" href="https://www.instagram.com/samfokdraws/">Instagram</a> to see some of my art!</p>
        </div>
      </section>
    </main>
  )
}