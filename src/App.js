import React, { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Arsenal from "./pages/Arsenal";
import TopBar from "./components/TopBar";
import "./index.css";
import MobileSidebar from "./components/MobileSidebar";

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");

  // Update active link when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const location = window.location.hash.slice(1) || "Home";
      setActiveLink(location);
    };

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initialize on first load
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="w-full flex flex-col h-screen font-katanmruy">
      <MobileSidebar setActiveLink={setActiveLink} activeLink={activeLink} />

      <TopBar setActiveLink={setActiveLink} activeLink={activeLink} />

      <main className="h-full mt-[70px] overflow-y-scroll scrollbar-hide">
        <section id="Home" className="h-screen overflow-x-hidden">
          <Home />
        </section>

        <section id="Projects" className="h-full overflow-x-hidden">
          <Projects />
        </section>

        <section id="Arsenal" className="h-[80vh] overflow-x-hidden">
          <Arsenal />
        </section>

        <section id="Contact" className="h-screen overflow-x-hidden">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
