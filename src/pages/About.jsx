import React from "react";
import AboutCard from "../components/AboutCard";
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-card font-katanmruy px-4 sm:px-6 lg:px-12 py-16 md:py-24 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-3xl flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-black text-text tracking-tighter md:mb-4 mb-2">
          <span className="text-muted">About</span> Me
        </h1>

        <div className="mt-8 flex flex-col gap-5 text-base lg:text-lg leading-relaxed text-slate-600">
          <p>
            Full-Stack Developer skilled in building scalable web and mobile
            applications with JavaScript, TypeScript, React, Next.js, and React
            Native. Experienced in Node.js, Express.js, PostgreSQL, Supabase,
            and real-time applications, with a focus on clean, responsive, and
            user-friendly digital experiences
          </p>
          {/* <p>
            I currently work with SQWADS, helping build scalable and engaging
            digital products. I also enjoy personal projects like Picskrypt and
            SkillCirqle, inspired by my drive to innovate and make technology
            more impactful and accessible.
          </p> */}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 text-left">
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
            description="Over 5+ projects built and deployed."
            Icon={PiSuitcaseSimpleBold}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
