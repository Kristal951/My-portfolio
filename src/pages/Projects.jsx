import React from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaHeart, FaTasks } from "react-icons/fa";
import { projects } from "../components";

const Projects = () => {

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden items-center px-4 sm:px-8 lg:px-12 py-4">
      <div className="text-center mb-14">
        <h1 className="font-bold text-xl font-heading mb-2">
          {"<My Projects />"}
        </h1>
        <p className="font-body text-gray-500">View my works below</p>
      </div>

      <div className="flex flex-col w-full max-w-6xl items-center justify-center gap-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full md:w-3/5">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                {project.isVideo && project.media ? (
                  <video
                    src={project.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    {project.icon}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex gap-4 items-center justify-center md:justify-start mb-4">
                {project.icon}
                <h3 className="text-3xl font-heading lg:text-5xl font-bold tracking-tight mb-4">
                  {project.title}
                </h3>
              </div>
              <p className="text-base md:text-base lg:text-lg font-body mb-8 leading-relaxed">
                {project.description}
              </p>

              {project.isDownload ? (
                <a
                  href={project.link}
                  download
                  className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-all"
                >
                  Download APK
                </a>
              ) : (
                <a
                  href={project.link}
                  className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
