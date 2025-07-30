import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({alt, barWidth }) => {
  return (
    <div className="flex flex-col gap-2">
      <motion.div className="w-full h-2 flex">
        <motion.div className="bg-gray-300 w-full h-full relative rounded-full">
          <motion.span
            className="absolute top-0 left-0 h-full bg-black rounded-full md:rounded-lg"
            initial={{ width: 0 }}
            whileInView={{ width: `${barWidth}%` }}
            transition={{ duration: 0.9, delay: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillBar;
