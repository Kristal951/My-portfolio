import React from "react";
import { AllSkill } from "../components";
import TechPill from "../components/TechPill";

const Arsenal = () => {
  return (
    <section
      className="w-full h-full flex flex-col items-center justify-center px-6 py-20 gap-5 bg-card"
    >
      <div className="flex flex-col items-center justify-center text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black text-text tracking-tighter mb-4">
          <span className="text-muted">Technical</span> Arsenal
        </h1>
        <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
          Here are the technologies and tools I've mastered throughout my
          journey as a developer.
        </p>
      </div>

      <div className="w-full max-w-3xl my-10 flex flex-wrap gap-6 justify-center items-center">
        {AllSkill && AllSkill.length > 0 ? (
          AllSkill.map((skill, index) => (
            <TechPill 
              key={skill.id || index} 
              name={skill.label} 
              image={skill.image || skill.badge} 
            />
          ))
        ) : (
          <p className="text-sm text-[var(--muted)] italic">
            No weapons loaded in the arsenal yet...
          </p>
        )}
      </div>
    </section>
  );
};

export default Arsenal;