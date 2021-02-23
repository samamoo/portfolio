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
          <p>Hello there! I'm Samantha.</p>
          <p>I am a full-stack web developer. </p>
          <p>My side projects include learning new languages, reading, playing video games, and drawing. I can speak English, French, and Cantonese and I am currently learning Portuguese and American Sign Language. My favourite book is J.R.R. Tolkein's "The Hobbit". I love logic puzzles and I am very good at Minesweeper. I enjoy creating digital art, but always prefer good ol' fashion pen and paper. Check out my <a id="inline" href="https://www.instagram.com/samfokdraws/">Instagram</a> to see some of my work!</p>
        </div>
      </section>
    </main>
  )
}