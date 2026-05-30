import React from "react";
import Pic from "../assets/images/EditedPic.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";

const Home = () => {
  const pictureVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const buttonVariant = {
    changeBg: {
      backgroundColor: "gray",
      color: "white",
      transition: {
        duration: 0.8,
        type: "ease-in",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div
        className="hidden md:flex absolute top-[-50px] right-[-10px] h-[200px] w-[200px] rounded-xl 
        bg-white/10 backdrop-blur-md border border-white/20 opacity-10 shadow-[0_0_80px_rgba(0,0,0,0.7)] animate-pulse z-0"
      />
      <div
        className="hidden md:flex absolute bottom-[-10px] left-[-10px] h-[200px] w-[200px] rounded-xl 
        bg-white/10 backdrop-blur-md border border-white/20 opacity-10 shadow-[0_0_80px_rgba(0,0,0,0.7)] animate-pulse z-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full h-full details-container">
        <div className="flex w-[250px] h-[250px] md:w-[300px] md:h-[300px] items-center justify-center">
          <img
            src={Pic}
            alt="developer Pic"
            className="object-cover w-full h-full rounded-full border-[2px] border-black"
          />
        </div>

        <div
          className="flex flex-col items-center justify-center gap-8"
          initial="hidden"
          // whileInView="visible"
          variants={textVariants}
        >
          <div className="flex flex-col text-center gap-2">
            <div className="">
              <p className="text-base">Hello. i'm</p>
              <h2 className="text-3xl font-bold">Bethel Wisdom</h2>
            </div>

            <h4 className="text-xl max-w-lg text-muted">
              Fullstack Web & Mobile App Developer focused on building scalable,
              high-performance digital products with modern technologies.
            </h4>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-3">
            <button
              className="px-5 flex items-center gap-2 py-3 hover:scale-105 text-xl border-[2px] text-white bg-black rounded-lg btn"
              // whileHover="changeBg"
              variants={buttonVariant}
            >
              <Download />
              <p>Download CV</p>
            </button>

            <a
              href="#Contact"
              className="px-5 py-3 text-xl border-[2px] border-border hover:bg-black/5 rounded-lg btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
