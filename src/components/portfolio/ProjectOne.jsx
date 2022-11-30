import React from "react";
import AboutImg from "../../assets/thumbnail.jpg";
import Arrow from "./Arrow";

const ProjectOne = () => {
  return (
    <>
      <div className="portfolio__container portfolio__content">
        <h3 className="portfolio__title ">Fitness Page</h3>

        <div className="portfolio__box">
          <div className="skills__group">
            <div className="portfolio__data">
              <span className="portfolio__level">
                <Arrow /> css on styles <br />
                <Arrow /> React on JS Library <br />
                <br />
              </span>
            </div>
            <img src={AboutImg} alt="" className="about__img" />{" "}
          </div>
        </div>
        <a
          href="https://react-github-370105.rj.r.appspot.com/"
          className="home__social-icon"
          target="_blank"
        >
          See the Project
        </a>
      </div>
    </>
  );
};

export default ProjectOne;
