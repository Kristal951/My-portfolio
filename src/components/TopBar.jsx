import React, { useState } from "react";
import { Navlinks } from "./index.js";
import { motion } from "framer-motion";

const TopBar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  // Framer Motion variants for link fade-in
  const linkVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.15, duration: 0.8 },
    }),
  };

  return (
    <header className="w-full hidden md:flex h-[70px] lg:px-8 z-50 bg-white fixed items-center justify-between">
      {/* Logo */}
      <div className="flex items-center px-4">
        <a href="#home" className="text-2xl font-geistBold ml-10">
          Kristal Dev
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-4 px-4 mr-8">
        {Navlinks.map((navlink, i) => (
          <motion.div
            key={navlink.id}
            className="flex items-center border-r-2 last:border-r-0 pr-3"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={linkVariants}
          >
            <a
              href={`#${navlink.path}`}
              onClick={() => setActiveLink(navlink.path)}
              className={`text-[18px] transition-all duration-200 ${
                activeLink === navlink.path
                  ? "text-black font-geistBold"
                  : "text-gray-400 font-katanmruy hover:text-black"
              }`}
            >
              {navlink.label}
            </a>
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

export default TopBar;
