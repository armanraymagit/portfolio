import React from "react";
import { educationData } from "../constants/index.js";

const Education = () => {
  return (
    <section
      id="Education"
      className="min-h-screen bg-white dark:bg-black px-6 py-24 flex flex-col items-center transition-colors duration-500"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-black mb-16 text-center text-gray-900 dark:text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Education</span>
        </h2>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-blue-500/20 hover:before:bg-blue-500 transition-all duration-500"
            >
              <div className="bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="px-4 py-1 text-sm font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {edu.institution}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
