import React from "react";
import "./footer.css";

const Footer = (dark) => {
  return (
    <footer
      className={`footer ${dark.mode === true ? "footer-dark-mode" : ""} `}
    >
      <div className="footer__container container">
        <h1 className="footer__title">Marco</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          {/* <li>
            <a href="#" className="footer__link"></a>
          </li> */}
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://twiter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Marco Rossel portfolio. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
