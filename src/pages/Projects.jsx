import React from "react";
import { projects } from "../components/index";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="bg-white w-full p-10">
      <div className="mb-8 px-6 flex flex-col gap-1">
        <h1 className="text-4xl font-extrabold text-black tracking-tight">
          <span className="text-muted">Featured</span>{" "}
          Projects
        </h1>
        <p className="text-muted text-base max-w-md">
          A selection of my recent work and side projects.
        </p>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 px-6 pb-4 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <div key={index} className="flex-none snap-start">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
