import React from "react";

const AboutCard = ({ title, Icon, description }) => {
  return (
    <div className="p-4 sm:p-5 md:p-6 w-full max-w-[350px] flex flex-col items-start gap-3 bg-white border border-gray-300 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon */}
      <div className="flex mb-2 text-2xl sm:text-3xl text-gray-700">
        <Icon />
      </div>

      {/* Title */}
      <div className="text-lg sm:text-xl font-semibold text-gray-800">
        {title}
      </div>

      {/* Description */}
      <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </div>
    </div>
  );
};

export default AboutCard;


{/* <div className="flex flex-col w-[90%] max-w-6xl gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:p-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              {project.isVideo && project.media ? (
                <video
                  src={project.media}
                  className="rounded-xl w-full h-[300px] object-cover shadow-md"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 rounded-xl">
                  {project.icon}
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {project.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
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
      </div> */}