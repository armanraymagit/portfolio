import React from "react";
import { certifications } from "../constants/index.js";

const Certifications = () => {
  return (
    <section
      id="Certifications"
      className="min-h-screen bg-white dark:bg-black px-6 py-24 flex flex-col items-center transition-colors duration-500"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-black mb-16 text-center text-gray-900 dark:text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-100 shadow-xl rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {cert.title}
                  </h3>
                  <span className="text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {cert.description}
                </p>
              </div>
              
              {cert.credentialLink && (
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-bold transition-all duration-200 group-hover:scale-105"
                >
                  View Credential
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
