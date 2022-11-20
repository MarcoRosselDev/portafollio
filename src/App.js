import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import ScrollUp from "./components/scrollup/ScrollUp";
import Skills from "./components/skills/Skills";

function App() {
  /*============= Dark mode ============= */
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("darkmode1");
    if (data !== null) setDark(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("darkmode1", JSON.stringify(dark));
  }, [dark]);

  return (
    <>
      <button
        className="button-practis"
        onClick={() => setDark((dark) => !dark)}
      >
        clicked
      </button>
      <Header mode={dark} />
      <main className="main">
        <Home mode={dark} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
