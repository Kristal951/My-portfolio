
import React from "react";
import AboutCard from "../components/AboutCard";
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const About = () => {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-card px-4 py-16 font-katanmruy sm:px-6 md:py-24 lg:px-12">
      <div className="relative flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="mb-2 text-4xl font-black tracking-tighter text-text md:mb-4 md:text-5xl">
          <span className="text-muted">About</span> Me
        </h1>

        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted lg:text-lg">
          <p>
            I'm Bethel Chinonso Chukwu, professionally known as <span className="font-bold text-black">Kristal Dev</span> —
            a Full-Stack Developer and Co-founder & Chief Technology Officer
            of{" "}
            <a
              href="https://www.skillcirqle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text underline hover:text-blue-500 underline-offset-4"
            >
              SkillCirqle
            </a>
            . I build web and mobile applications using JavaScript,
            TypeScript, React, Next.js, and React Native, with experience in
            Node.js, Express.js, PostgreSQL, and Supabase. I focus on building
            scalable, responsive, and user-friendly digital experiences.
          </p>

          <p>
            I currently work as a Full-Stack Web Developer at{" "}
            <b className="text-text">Nexentrix Group Limited</b>, where I
            independently develop and maintain a workforce intelligence
            platform, building features across dashboards, authentication,
            access control, and backend services. Beyond my professional
            work, I enjoy building projects like Picskrypt and exploring
            ideas that use technology to solve practical problems.
          </p>
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
            description="Professional development experience, product leadership, and deployed projects"
            Icon={PiSuitcaseSimpleBold}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
