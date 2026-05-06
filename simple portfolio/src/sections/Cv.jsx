import React from "react";

const CV = () => {
  return (
    <section
      id="Cv"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl w-full bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Deep Dive?</span>
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Download my full resume to see my detailed technical journey, project contributions, and academic background.
        </p>

        <a
          href="/arman_rayma_resume (2).pdf"
          download="arman_rayma_resume.pdf"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xl font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default CV;
