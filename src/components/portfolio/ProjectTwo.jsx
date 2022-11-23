import React from "react";
import AboutImg from "../../assets/facebook-clone.jpeg";

const ProjectTwo = () => {
  return (
    <div className="portfolio__container portfolio__content">
      <h3 className="portfolio__title ">Facebook Clone</h3>

      <div className="portfolio__box">
        <div className="skills__group">
          <div className="portfolio__data">
            <span className="portfolio__level">
              > taildwin on styles <br /> > firebase on autentication <br /> >
              React on JS Library
            </span>
          </div>
          <img src={AboutImg} alt="" className="about__img" />{" "}
        </div>
      </div>
      <div>
        <a
          href="../../fitnesPage/public/index.html"
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
