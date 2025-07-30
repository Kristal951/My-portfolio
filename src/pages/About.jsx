import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// import image from "../assets/about.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // ← Detect every entry
  const [typewriterKey, setTypewriterKey] = useState(0);

  // Reset Typewriter on every view
  useEffect(() => {
    if (isInView) {
      setTypewriterKey(prev => prev + 1); // Trigger re-render
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={textVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col md:flex-row gap-10 items-center justify-between w-full px-5 md:px-20 mt-12 md:mt-28"
    >
      {/* Text Section */}
      <div className="w-full md:w-[60%]">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          <Typewriter
            key={typewriterKey}
            words={["<About Me />"]}
            loop={1}
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </h1>

        <motion.div variants={textVariants}>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Hello! I'm a full-stack developer with a strong passion for building modern, intuitive, and performant web and mobile applications.
            With a background in JavaScript, React, React Native, Node.js, and MongoDB, I thrive in transforming complex problems into clean, efficient code.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I have experience working across the entire development lifecycle—from designing responsive interfaces to developing RESTful APIs and deploying scalable systems.
            I also enjoy experimenting with animations, real-time communication using WebSockets, and clean UI/UX practices.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            When I'm not coding, I love learning new technologies, contributing to open-source projects, or brainstorming product ideas that make users' lives easier.
            Let’s build something great together!
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[40%] flex justify-center">
        {/* <img
          src={image}
          alt="About illustration"
          className="w-[200px] md:w-[400px] h-auto rounded-full md:rounded-2xl shadow-xl border-4 border-white object-cover"
        /> */}
      </div>
    </motion.div>
  );
};

export default About;
