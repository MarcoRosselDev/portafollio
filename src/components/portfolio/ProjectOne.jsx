import React from "react";
import AboutImg from "../../assets/work4.jpg";

const ProjectOne = () => {
  const project1 = () => {};
  return (
    <div className="portfolio__container portfolio__content" onClick={project1}>
      <h3 className="portfolio__title ">Fitness Page</h3>

      <div className="portfolio__box">
        <div className="skills__group">
          <div className="portfolio__data">
            <span className="portfolio__level">
              > css on styles <br /> > React on JS Library <br />
              <br />
            </span>
          </div>
          <img src={AboutImg} alt="" className="about__img" />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
