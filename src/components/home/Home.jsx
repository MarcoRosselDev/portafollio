import React, { useState } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  /*============= Dark mode ============= */
  const [dark, setDark] = useState(true);

  const toggleTab = () => {
    setDark((dark) => !dark);
  };

  return (
    // <section className="home section" id="home">
    <section className={`home section ${dark ? "dark-mode" : ""}`} id="home">
      <div className="home__container container grid">
        <div className="home__content grid ">
          <Social />

          <div className="home__img "></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
