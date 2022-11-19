import React, { useState, useEffect } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  /*============= Dark mode ============= */
  const [dark, setDark] = useState(true);
  const [items, setItems] = useState(false);

  useEffect(() => {
    const isLocal = JSON.parse(localStorage.getItem("items"));
    if (isLocal) {
      setItems(isLocal);
    }
  });

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
