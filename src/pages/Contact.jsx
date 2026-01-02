import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";

const Contact = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-20% 0px" });

  useEffect(() => {
    if (isInView) {
      setShowTypewriter(false);
      setTimeout(() => setShowTypewriter(true), 100);
    }
  }, [isInView]);

  const HeaderVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
  };

  return (
    <div className="w-full md:pt-[80px] py-4 md:pb-[80px] h-screen  flex flex-col">
      <motion.div
        className="flex w-full flex-col md:flex-row h-max items-center justify-center pt-8 md:p-0"
        variants={HeaderVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="flex-row flex gap-1" ref={textRef}>
          <p className="font-bold text-xl text-black">
            {showTypewriter && (
              <Typewriter
                words={["<Contact Me />"]}
                loop={1}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            )}
          </p>
        </div>
      </motion.div>

      <div className="flex w-full h-full md:flex-row items-center flex-col md:pt-[150px] p-2 md:p-0">
        <div
          className="flex md:w-[50%] w-full lg:h-[80%] h-[50%] items-center justify-start"
          ref={textRef}
        >
          <p className="text-gray-700 text-center text-[15px] sm:text-[16px] max-w-2xl">
            {showTypewriter && (
              <Typewriter
                words={[
                  "I'm always excited to connect with fellow creatives, developers, and forward-thinking individuals. Whether you're looking to collaborate on a project, discuss new ideas, or simply want to say hello, I’d love to hear from you. I’m passionate about building meaningful digital experiences and enjoy working on projects that challenge me to grow. Don’t hesitate to reach out — I’m always open to opportunities, feedback, or a good conversation. Let’s build something amazing together.",
                ]}
                loop={1}
                cursor
                typeSpeed={30}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            )}
          </p>
        </div>

        <div className="flex w-full lg:w-[50%] h-full flex-col gap-2 items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
