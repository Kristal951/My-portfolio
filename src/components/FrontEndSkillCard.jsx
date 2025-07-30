import React from "react";
import SkillBar from "./SkillBar";
import check from "../assets/icons/bxs-badge-check.svg";
import { frontEndSkills } from ".";
import SkillCard from "./SkillCard";

const FrontEndSkillCard = () => {
  return (
    <div className="">
      {frontEndSkills.map((skill, index) => (
        <SkillCard index={index} skill={skill} />
      ))}
    </div>
  );
};

export default FrontEndSkillCard;
