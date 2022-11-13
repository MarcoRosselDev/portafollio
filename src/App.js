import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/notFound/NotFound";
import Gallery from "./pages/gallery/Gallery";

import "./App.css";

function App() {
  return;
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />

      <Route path="gallery" element={<Gallery />} />
    </Routes>
    <Footer />
  </BrowserRouter>;
}

export default App;
