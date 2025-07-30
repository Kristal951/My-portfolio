import React from "react";
import SkillBar from "./SkillBar";
import { backendSkills } from ".";
import check from "../assets/icons/bxs-badge-check.svg";

const BackendSkillsCard = () => {

  return (
        <div className="flex w-full h-full overflow-y-scroll items-start justify-center p-2">
          <div className="grid md:grid-cols-[repeat(3,_30%)] grid-cols-[repeat(1,_100%)] gap-6 md:w-[60%] w-[90%] h-[500px] md:h-[300px]">
            {backendSkills.map((skill) => (
              <div className="flex gap-2 shadow-lg rounded-lg justify-center p-2 bg-white/10 backdrop-blur-md flex-col">
                <div className="flex">
                  <h2 className="text-base font-bold">{skill.label}</h2>
                  <img src={check} alt={"check"} className="w-6 h-6" />
                </div>
    
                <SkillBar barWidth={skill.barWidth} />
                <p className="text-right font-semibold">{skill.barWidth}%</p>
              </div>
            ))}
          </div>
        </div>
  );
};

export default BackendSkillsCard;
