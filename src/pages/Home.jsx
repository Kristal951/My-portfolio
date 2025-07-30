import React from "react";
import Pic from "../assets/images/EditedPic.png";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

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
      backgroundColor: "black",
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
        <motion.div
          className="flex w-[300px] h-[300px] items-center justify-center"
          initial="hidden"
          whileInView="visible"
          variants={pictureVariants}
        >
          <img
            src={Pic}
            alt="developer Pic"
            className="object-cover w-full h-full rounded-full border-[2px] border-black"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          <div className="text-center">
            <p className="text-base font-medium">
              <Typewriter
                words={["Hello. I'm"]}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
            <h2 className="text-3xl font-bold">
              <Typewriter
                words={["Bethel Wisdom"]}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h2>
            <h4 className="text-xl font-semibold">
              <Typewriter
                words={["A Fullstack Web Developer And Mobile App Developer"]}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h4>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <motion.button
              className="px-5 py-3 text-xl font-semibold border-[2px] border-black rounded-3xl btn"
              whileHover="changeBg"
              variants={buttonVariant}
            >
              Download CV
            </motion.button>

            <motion.button
              className="px-5 py-3 text-xl font-semibold border-[2px] border-black rounded-3xl btn"
              whileHover="changeBg"
              variants={buttonVariant}
            >
              Contact Me
            </motion.button>
          </div>

          <div className="p-1 flex flex-row gap-2">
            <a className="p-1 cursor-pointer hover:shadow-lg rounded-md shadow-black">
              <FaTwitter className="w-[40px] h-[40px]" />
            </a>
            <a
              href="https://github.com/Kristal951"
              className="p-1 cursor-pointer hover:shadow-lg rounded-md shadow-black"
            >
              <FaGithubSquare className="w-[40px] h-[40px]" />
            </a>
            <a
              href="mailto:KristalDev001@gmail.com"
              className="p-1 cursor-pointer hover:shadow-lg rounded-md shadow-black"
            >
              <IoMail className="w-[40px] h-[40px]" />
            </a>
            <a
              href=""
              className="p-1 cursor-pointer hover:shadow-lg rounded-md shadow-black"
            >
              <FaDiscord className="w-[40px] h-[40px]" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
