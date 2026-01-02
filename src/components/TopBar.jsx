import React, { useState } from "react";
import { Navlinks } from "./index.js";
import { motion } from "framer-motion";

const TopBar = () => {
  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 1,
      },
    }),
  };
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <div className="w-full hidden md:flex h-[70px] lg:p-8 z-50 bg-white fixed items-center justify-between logo-container">
      <div className="flex p-4 logo-container-2">
        <a href="#home" className="text-2xl font-bold ml-10">
          Kristal Dev
        </a>
      </div>

      <nav className="flex w-max p-2 gap-2 mr-8 items-center justify-between">
        {Navlinks.map((navlink, i) => (
          <motion.div
            className="w-max h-max flex items-center justify-center p-2 gap-[0.20rem] hover:text-black hover:font-bold"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={linkVariants}
            key={navlink.id}
          >
            {activeLink === navlink.path && (
              <span className="text-xl font-body md:text-xl text-black font-bold">
                {"<"}
              </span>
            )}

            <a
              href={`#${navlink.path}`}
              onClick={() => setActiveLink(navlink.path)}
              className={`text-[18px] md:text-xl font-body font-semibold p-0 transition-all duration-200 hover:font-bold hover:text-black ${
                activeLink === navlink.path
                  ? "text-black font-bold"
                  : "text-gray-400"
              }`}
            >
              {navlink.label}
            </a>

            {activeLink === navlink.path && (
              <span className="text-black md:text-xl font-body font-bold">{"/>"}</span>
            )}
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default TopBar;
