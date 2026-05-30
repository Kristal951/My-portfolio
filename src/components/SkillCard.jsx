import React from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      layout
      // whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-white border border-gray-100 rounded-2xl p-5 
                 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] 
                 transition-all duration-300 cursor-default overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-black transition-colors duration-300">
            <img
              src={skill.image}
              alt={skill.label}
              className="w-6 h-6 object-contain group-hover:invert transition-all duration-300"
            />
          </div>
          <h3 className="text-sm font-geistBold text-gray-800 group-hover:text-black">
            {skill.label}
          </h3>
        </div>

        <span className="text-[10px] font-geistBold uppercase tracking-tighter text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
          {skill.category}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <span className="text-[11px] font-geistBold text-gray-400 uppercase tracking-wider">
            Proficiency
          </span>
          <p className="text-sm font-geistBold text-black">{skill.barWidth}%</p>
        </div>

        <div className="w-full">
          <SkillBar barWidth={skill.barWidth} />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
