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
import "./index.css";

const App = () => {
  return (
    <div className="w-full flex flex-col h-screen">
      <MobileSidebar />
      <TopBar />

      <main className="h-screen overflow-y-scroll mt-[70px]">
        <section id="Home" className="h-screen overflow-x-hidden">
          <Home />
        </section>
        <section id="About" className="h-screen overflow-x-hidden">
          <About />
        </section>
        <section id="Projects" className="min-h-screen overflow-x-hidden">
          <Projects />
        </section>
        <section id="Skills" className="h-screen overflow-x-hidden">
          <Skills />
        </section>
        <section id="Contact" className="h-screen overflow-x-hidden">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
