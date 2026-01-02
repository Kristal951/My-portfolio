import React, { useEffect, useRef, useState } from "react";
import { AllSkill } from "../components";
import SkillCard from "../components/SkillCard";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "framer-motion";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const Tabs = ["All", "Frontend", "Backend", "Tools"];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [typewriterKey, setTypewriterKey] = useState(0);
  const wasInView = useRef(false);

  useEffect(() => {
    if (isInView && !wasInView.current) {
      setTypewriterKey((prev) => prev + 1);
      wasInView.current = true;
    } else if (!isInView) {
      wasInView.current = false;
    }
  }, [isInView]);

  const filteredSkills = AllSkill.filter(
    (skill) =>
      selectedCategory === "All" ||
      skill.category === selectedCategory.toLowerCase()
  );

  return (
    <div className="md:py-20 overflow-hidden py-8 md:px-4 px-2 h-full relative">
      <div className="container mx-auto max-w-5xl">
        <div ref={ref}>
          <h2 className="text-2xl font-bold text-center mb-8">
            <Typewriter
              key={typewriterKey}
              words={["<My Skills />"]}
              loop={1}
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h2>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {Tabs.map((tab, key) => (
            <button
              onClick={() => setSelectedCategory(tab)}
              className={
                selectedCategory === tab
                  ? "bg-black text-white px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                  : "px-5 py-2 rounded-full transition-colors duration-300 capitalize bg-gray-100 text-black hover:bg-black hover:text-white"
              }
              key={key}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid overflow-y-scroll md:h-[430px] lg:h-max h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
