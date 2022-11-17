import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      {/* twiteer */}
      <a
        href="https://twitter.com/MarcoRosselTw"
        className="home__social-icon"
        target="_blank"
      >
        <i className="bx bxl-twitter"></i>
      </a>

      {/* github */}
      <a
        href="https://github.com/MarcoRosselDev"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
