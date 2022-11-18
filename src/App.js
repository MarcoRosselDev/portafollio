import React from "react";
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
  return (
    <>
      <Header />
      <main className="main">
        <Home />
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
