import React from "react";
import AboutImg from "../../assets/facebook-clone.jpeg";
import Arrow from "./Arrow";

const ProjectTwo = () => {
  return (
    <div className="portfolio__container portfolio__content">
      <h3 className="portfolio__title ">Facebook Clone</h3>

      <div className="portfolio__box">
        <div className="skills__group">
          <div className="portfolio__data">
            <span className="portfolio__level">
              <Arrow /> taildwin on styles <br />
              <Arrow /> firebase on autentication <br />
              <Arrow /> React on JS Library
            </span>
          </div>
          <img src={AboutImg} alt="" className="about__img" />{" "}
        </div>
      </div>
      <div>
        <a
          href="https://react-github-370105.rj.r.appspot.com/"
          className="home__social-icon"
          target="_blank"
        >
          See the Project
        </a>
      </div>
    </div>
  );
};

export default ProjectTwo;
