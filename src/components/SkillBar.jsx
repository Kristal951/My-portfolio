import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ barWidth }) => {
  return (
    <div className="group/bar w-full">
      <div className="w-full h-[6px] bg-gray-100 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-black rounded-full"
          initial={{ width: 0 }}
          // whileInView={{ width: `${barWidth}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
              delay: 1,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
