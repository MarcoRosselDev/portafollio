import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./header.css";

const Header = () => {
  /*============= Change Background header ============= */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*============= Toggle Menu ============= */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /*============= Dark mode ============= */
  const areLocalStr = JSON.parse(localStorage.getItem("list1"));
  const [dark, setDark] = useState("ligthmode");

  if (areLocalStr) {
    // localUses();
  }

  function localUses() {
    setDark((dark) => !dark);
    let dom = "";
    if (!dark) {
      dom = "darkmode";
    } else {
      dom = "ligthmode";
    }
    localStorage.setItem("list1", JSON.stringify(dom));
  }
  return (
    <header className={`header ${dark ? "dark-mode" : ""}`}>
      <nav className="nav container">
        <div className="left-side">
          <a href="index.html" className="nav__logo">
            Marco
          </a>
          <div className="dark-button" onClick={localUses}>
            <div className="button-bw"></div>
          </div>
        </div>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link "
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? "nav__link active-link"
                    : "nav__link "
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link "
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link "
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link "
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
