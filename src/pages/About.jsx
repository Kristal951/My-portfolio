import React from "react";
import AboutCard from "../components/AboutCard";
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const About = () => {
  return (
    <section
      id="About"
      className="relative min-h-full w-full overflow-hidden bg-card px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="relative mx-auto flex w-full max-w-5xl flex-col">
        <header className="mb-8 text-center sm:mb-10 md:mb-12">
          <h1 className="text-3xl font-black tracking-tight text-text sm:text-4xl md:text-5xl md:mb-4 mb-2">
            <span className="text-muted">About</span> Me
          </h1>
          <p className="text-muted text-center text-base md:text-lg leading-relaxed md:text-center w-full">
            A little introduction
          </p>
        </header>
        <div className="mx-auto w-full max-w-3xl space-y-5 text-[15px] leading-7 text-muted sm:space-y-6 sm:text-base sm:leading-8 md:text-lg">
          <p className="md:text-center">
            I'm Bethel Chinonso Chukwu, professionally known as{" "}
            <span className="font-bold text-text">Kristal Dev</span> — a
            Full-Stack Developer and Co-founder & Chief Technology Officer of{" "}
            <a
              href="https://www.skillcirqle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text underline decoration-blue-500/50 underline-offset-4 transition-colors hover:text-blue-500"
            >
              SkillCirqle
            </a>
            . I build web and mobile applications with JavaScript, TypeScript,
            React, Next.js, and React Native, alongside backend technologies
            like Node.js, Express.js, PostgreSQL, and Supabase. My focus is on
            creating scalable, responsive, and user-friendly digital products.
          </p>

          <p className=" md:text-center">
            I currently work as a Full-Stack Web Developer at{" "}
            <span className="font-semibold text-text">
              Nexentrix Group Limited
            </span>
            , where I independently develop and maintain a workforce
            intelligence platform. My work includes dashboards, authentication,
            access control, and backend services. Outside of work, I build
            personal projects like{" "}
            <a
              href="https://www.picskrypt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text underline decoration-blue-500/50 underline-offset-4 transition-colors hover:text-blue-500"
            >
              Picskrypt
            </a>{" "}
            and explore ideas that use technology to solve practical problems.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <AboutCard
            title="Technologies"
            description="JavaScript, TypeScript, React, Next.js, Node.js, HTML, CSS"
            Icon={FaCode}
          />

          <AboutCard
            title="Education"
            description="Pursuing a B.Sc. in Computer Science at the University of Abuja"
            Icon={RiGraduationCapFill}
          />

          <AboutCard
            title="Experience"
            description="Professional development, product leadership, and deployed projects"
            Icon={PiSuitcaseSimpleBold}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
