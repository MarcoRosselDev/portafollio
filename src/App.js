import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return;
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>;
}

export default App;
