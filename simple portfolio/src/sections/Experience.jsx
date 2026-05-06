import React from "react";
import { experienceData } from "../constants/index.js";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="min-h-screen bg-white dark:bg-black px-6 py-24 flex flex-col items-center transition-colors duration-500"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-black mb-20 text-center text-gray-900 dark:text-white">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
        </h2>

        <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-4 md:ml-0 md:left-1/2">
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-16 relative">
              {/* Dot */}
              <div className="absolute top-0 -left-[11px] md:-left-[11px] w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-black shadow-lg" />
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right md:ml-0" : "md:pl-16 md:ml-[50%]"} ml-10`}>
                <div className="bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    {exp.duration}
                  </span>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  
                  <h4 className="text-lg font-bold text-blue-500 mb-4">
                    {exp.company}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
