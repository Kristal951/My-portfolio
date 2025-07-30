import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./RootLayout";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TopBar from "./components/TopBar";
import MobileSidebar from "./components/MobileSIidebar";
import './index.scss'

const App = () => {
  return (
    <div className="w-full flex flex-col h-screen">
      <MobileSidebar />
      <TopBar />

      <main className="h-screen overflow-y-scroll snap_container">
        <section id="Home" className="snap_section">
          <Home />
        </section>
        <section id="About" className="snap_section">
          <About />
        </section>
        <section id="Skills" className="snap_section">
          <Skills />
        </section>
        <section id="Projects" className="snap_section">
          <Projects />
        </section>
        <section id="Contact" className="snap_section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
