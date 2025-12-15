import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main className="app__main">
          <Routes>
            {/* Home: full width */}
            <Route path="/" element={<Home />} />

            {/* Autres pages: centrées */}
            <Route
              path="/projets"
              element={
                <div className="page-container">
                  <Projects />
                </div>
              }
            />
            <Route
              path="/a-propos"
              element={
                <div className="page-container">
                  <About />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="page-container">
                  <Contact />
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
