import React from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

const SkillCard = ({ index, skill }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 
                 transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer"
    >
      <div className="text-left mb-4 flex flex-row items-center gap-2">
        <img src={skill.image} alt={skill.label} className="w-6 h-6" />
        <h3 className="text-lg font-semibold">{skill.label}</h3>
      </div>
      <div className="w-full">
        <SkillBar barWidth={skill.barWidth} />
      </div>
      <div className="text-right mt-1">
        <p className="text-sm font-medium">{skill.barWidth}%</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
