import React from "react";
import AboutCard from "../components/AboutCard";
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const About = () => {
  return (
    <div className="flex flex-col pt-[70px] w-full h-full justify-center items-center bg-white font-katanmruy px-4">
      {/* <h1 className="text-3xl md:text-2xl font-geistBold mb-10">
        {"<About Me/>"}
      </h1> */}
      <div className="w-full flex flex-col md:flex-row gap-0 md:gap-16 h-full items-center justify-center">
        <div className="hidden md:flex md:w-1/2"></div>

        <div className="flex flex-col md:w-1/2 gap-6 p-8 justify-center items-start">
          <p className="text-center md:text-left font-katanmruy text-base leading-relaxed">
            Hi, I’m <b>Bethel</b>, a passionate software developer with over 3+
            years of experience. I focus on building sleek, user-friendly
            digital experiences. I make <b>web applications</b> using the{" "}
            <b>MERN</b> stack and create <b>mobile applications</b> using React
            Native, blending creativity and functionality. I currently work with
            SQWADS, helping build scalable and engaging digital products. I also
            enjoy personal projects like Talkmore, Calcex, and Projex, inspired
            by my drive to innovate and make technology more impactful and
            accessible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <AboutCard
              title="Languages"
              description="Javascript, SCSS, HTML, CSS, React Native"
              Icon={FaCode}
            />
            <AboutCard
              title="Education"
              description="Currently pursuing B.S.C in Computer Science"
              Icon={RiGraduationCapFill}
            />
            <AboutCard
              title="Projects"
              description="Over 5+ projects completed"
              Icon={PiSuitcaseSimpleBold}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
