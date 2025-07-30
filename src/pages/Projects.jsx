import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaCalculator, FaTasks } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Projects = () => {
  // const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Calcex Calculator",
      description:
        "A fullstack scientific calculator with history, memory, and theme support. And also with an online all-currency converter",
      icon: <FaCalculator className="text-yellow-500 text-3xl" />,
      path: "/projects/calcex",
    },
  ];

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 1, projects.length - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="w-full h-screen mx-auto relative overflow-hidden">
      <motion.div
        className="flex w-full flex-col h-max items-center justify-center pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-sm font-medium uppercase">View my works</p>
        <h2 className="text-2xl font-bold mt-2">My Projects</h2>
      </motion.div>

      <div className="w-full h-full relative px-6 md:px-12 mt-10">
        {projects.length > 1 && (
          <div className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
            >
              <MdArrowLeft fontSize={30} />
            </button>
          </div>
        )}

        {projects.length > 1 && (
          <div className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              disabled={currentIndex === projects.length - 1}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
            >
              <MdArrowRight fontSize={30} />
            </button>
          </div>
        )}

        <motion.div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100 && currentIndex < projects.length - 1) {
              nextSlide();
            } else if (info.offset.x > 100 && currentIndex > 0) {
              prevSlide();
            } else {
              scrollToIndex(currentIndex);
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="snap-center min-w-full md:min-w-[60%] h-[350px] bg-white border rounded-2xl shadow-md flex flex-col items-center justify-center text-center px-6"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              // onClick={() => navigate(project.path)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {project.icon}
              <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
              <p className="mt-2 text-sm font-medium">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
