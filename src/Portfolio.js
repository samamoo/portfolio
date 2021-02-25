import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import data from "./projectsDb.json";

export default function Portfolio () {
  return (
    <main id="portfolio" className="portfoliopage">
      <section className="portfolio-container">
        <h1>Portfolio</h1>
        <div className="item-container">
          <ul className="portfolio-list">
            {data.map((val) => {
              return (
                <PortfolioItem
                title={val.title}
                description={val.description}
                stack={val.stack}
                image={val.image}
                github={val.github} />
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}