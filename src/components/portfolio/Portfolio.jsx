import React from "react";
import "./portfolio.css";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";

const Portfolio = (dark) => {
  console.log(typeof dark.mode);
  return (
    <div className={`${dark.mode === true ? "dark-mode" : ""}`}>
      <div id="portfolio" className="portfolio__container section container ">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Last Projects</span>
        <div className="portfolio__container  grid">
          <ProjectOne />
          <ProjectTwo />
        </div>
      </div>
      <div className="qwe">
        <button className="button button--flex button-projects">
          See All Projects
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
