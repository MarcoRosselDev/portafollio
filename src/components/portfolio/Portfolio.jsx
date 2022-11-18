import React from "react";
import "./portfolio.css";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio__container section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Last Projects</span>

      <div className="portfolio__container container grid">
        <ProjectOne />
        <ProjectTwo />
      </div>
    </div>
  );
};

export default Portfolio;
