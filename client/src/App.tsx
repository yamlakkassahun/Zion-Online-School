import React from "react";
import "./App.css";
import { Footer } from "./components/layouts/Footer";
import { NavBar } from "./components/layouts/Navbar";
import { Home } from "./features/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./components/shared/PageNotFound";
import ScrollToTop from "./components/hooks/ScroleTop";
import { About } from "./features/about/About";

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <div className="page-wraper">
        <div id="loading-icon-bx"></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
