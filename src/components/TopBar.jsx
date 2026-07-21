import React from "react";
import { motion } from "framer-motion";
import { Navlinks } from "./index.js";
import Pic from "../assets/images/Black_logo.png";

const TopBar = ({ setActiveLink, activeLink }) => {
  return (
    <header className="fixed top-0 left-0 w-full hidden md:flex h-[70px] lg:px-8 z-50 bg-background/80 backdrop-blur-md items-center justify-between transition-all">
      <div className="flex items-center px-4">
        <a
          href="#home"
          onClick={() => setActiveLink("home")}
          className="block w-[80px] h-[40px] transition-transform hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <img
            src={Pic}
            alt="Kristal Dev Logo"
            className="w-full h-full object-contain object-left"
          />
        </a>
      </div>

      <nav className="flex items-center gap-1 px-4 mr-4">
        {Navlinks.map((navlink) => {
          const isActive = activeLink === navlink.path;

          return (
            <a
              key={navlink.id}
              href={`#${navlink.path}`}
              onClick={() => setActiveLink(navlink.path)}
              className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors rounded-full ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeTopBarIndicator"
                  className="absolute inset-0 bg-muted rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {navlink.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default TopBar;