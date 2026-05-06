import React from "react";
import { skillsData } from "../constants/index.js";

const SkillCard = ({ name, logo, emoji }) => (
  <div className="group relative flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
    
    {logo ? (
      <img
        src={logo}
        alt={name}
        className="w-16 h-16 object-contain mb-4 transform group-hover:rotate-12 transition-transform duration-300"
      />
    ) : (
      <span className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{emoji}</span>
    )}
    <p className="text-lg font-bold text-gray-800 dark:text-gray-200 text-center">
      {name}
    </p>
  </div>
);

const Section = ({ title, data, isSoftSkill = false }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center md:text-left flex items-center gap-4">
        <span className="w-12 h-1.5 bg-blue-500 rounded-full" />
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((item, index) => (
          <SkillCard key={index} {...item} isSoftSkill={isSoftSkill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { techSkills, coreFundamentals, tools, softSkills } = skillsData;

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-gray-900 dark:text-white mb-20">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arsenal</span>
        </h2>

        <div className="space-y-10">
          <Section title="Technical Mastery" data={techSkills} />
          <Section title="CS Core Fundamentals" data={coreFundamentals} isSoftSkill />
          <Section title="Digital Tools" data={tools} />
          <Section title="Core Strengths" data={softSkills} isSoftSkill />
        </div>
      </div>
    </section>
  );
};

export default Skills;
