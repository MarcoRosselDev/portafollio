import React from "react";
import AboutImg from "../../assets/cloud-plus-firebase_1x.png";
import Arrow from "./Arrow";

const ProjectTwo = () => {
  return (
    <div className="portfolio__container portfolio__content">
      <h3 className="portfolio__title ">Firebase Login</h3>

      <div className="portfolio__box">
        <div className="skills__group">
          <div className="portfolio__data">
            <span className="portfolio__level">
              <Arrow /> taildwin on styles <br />
              <Arrow /> firebase on autentication <br />
              <Arrow /> React on JS Library
            </span>
          </div>
          <img src={AboutImg} alt="" className="about__img" />
        </div>
      </div>
      <div>
        <a
          href="https://login-firebase-370419.nn.r.appspot.com/login"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the Project
        </a>
      </div>
    </div>
  );
};

export default ProjectTwo;
