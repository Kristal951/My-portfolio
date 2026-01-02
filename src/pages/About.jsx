import React from "react";
import AboutCard from "../components/AboutCard";
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import GithubIMG from "../assets/images/Github.png";
import GitIMG from "../assets/images/Git.png";
import VsCodeIMG from "../assets/images/VS_code.png";
import ExpressIMG from "../assets/images/Express.png";
import TailwindIMG from "../assets/images/Tailwind.png";
import NodeJSIMG from "../assets/images/programing.png";

const About = () => (
  <div className="flex flex-col pt-2 h-full w-full items-center justify-start">
    <div className="flex ">
      <h1 className="font-bold text-xl">{"<About Me/>"}</h1>
    </div>
    <div className="flex w-full justify-center">
      <div className="md:grid grid-cols-2 p-4 md:p-10 flex flex-col w-full max-w-8xl">
        <div className="hidden md:block"></div>

        <div className=" md:pr-8 flex flex-col gap-4 justify-between">
          <p className="font-body2 text-center md:text-left">
            Hi, I’m <b>Bethel</b>, a passionate software developer, with over 3+
            years of experience. i am focused on building sleek, user-friendly
            digital experiences. I make <b>web </b>
            applications using the <b>MERN</b> stack and also create Mobile
            applications using <b>React Native</b> creating projects that blend
            creativity and functionality. I currently work with SQWADS, where I
            help build scalable and engaging digital products. I also love
            working on personal projects like Talkmore, Calcex, and Projex, all
            inspired by my drive to innovate and make technology more impactful
            and accessible.
          </p>

          <div className="md:grid grid-cols-3 md:gap-8 mt-8 flex flex-col gap-10">
            <AboutCard
              title={"Languages"}
              description={"ReactJS, Javascript, HTML, CSS, React Native"}
              Icon={FaCode}
            />
            <AboutCard
              title={"Education"}
              description={"Currently processing B.S.C in computer science"}
              Icon={RiGraduationCapFill}
            />
            <AboutCard
              title={"Projects"}
              description={"Over 5+ projects"}
              Icon={PiSuitcaseSimpleBold}
            />
          </div>

          <div className="flex mt-6 flex-col">
            <h2 className="text-xl font-bold font-heading">Tools I use:</h2>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
              <div className="p-2 flex w-max items-center justify-center border rounded-md">
                <img
                  src={GithubIMG}
                  className="w-[50px] h-[50px] object-cover"
                  alt="GitHub icon"
                />
              </div>
              <div className="p-2 flex w-max items-center justify-center border rounded-md">
                <img
                  src={GitIMG}
                  className="w-[50px] h-[50px] object-cover"
                  alt="Git icon"
                />
              </div>
              <div className="p-2 flex w-max items-center justify-center border rounded-md">
                <img
                  src={VsCodeIMG}
                  className="w-[50px] h-[50px] object-cover"
                  alt="VS Code icon"
                />
              </div>
              <div className="p-2 flex w-max items-center justify-center border rounded-md">
                <img
                  src={ExpressIMG}
                  className="w-[50px] object-cover h-[50px]"
                  alt="Express.js icon"
                />
              </div>
              <div className="p-2 flex w-max items-center justify-center border rounded-md">
                <img
                  src={TailwindIMG}
                  className="w-[50px] object-contain h-[50px]"
                  alt="Tailwind CSS icon"
                />
              </div>
              <div className="p-2 flex w-max items-center justify-center border rounded-md">
                <img
                  src={NodeJSIMG}
                  className="w-[50px] object-contain h-[50px]"
                  alt="Node.js icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
