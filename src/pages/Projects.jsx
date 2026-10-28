import React from "react";
import { projects } from "../components/index";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="w-full h-full md:py-10 py-6 bg-background">
      <div className="mb-10 px-6 w-full flex flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl font-black tracking-tighter text-text md:mb-4 md:text-5xl">
          <span className="text-muted">Featured</span> Projects
        </h1>
        <p className="text-sm md:text-base text-muted max-w-md text-center leading-relaxed">
          A curated selection of my work and side projects.
        </p>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide sm:scrollbar-thin scrollbar-thumb-border hover:scrollbar-thumb-muted-foreground/30 transition-colors">
        <div className="flex gap-6 md:gap-8 px-6 pb-6 snap-x snap-mandatory w-max min-w-full">
          {projects.map((project, index) => (
            <div 
              key={project.id || index} 
              className="flex-none snap-start w-[280px] sm:w-[320px] md:w-[380px] transition-transform duration-300 hover:-translate-y-1"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Projects;