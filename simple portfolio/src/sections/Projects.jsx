import React, { useRef } from "react";
import { projects } from "../constants/index.js";

const Projects = () => {
  const handleFullScreen = (e) => {
    const container = e.target.closest('.media-container');
    if (container) {
      container.requestFullscreen().catch(err => console.error(err));
    }
  };

  return (
    <section
      id="Projects"
      className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-100 px-6 py-24 flex flex-col items-center transition-colors duration-500"
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl font-black mb-20 text-center text-gray-900 dark:text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </h2>

        <div className="grid gap-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12`}
            >
              {/* Content Side */}
              <div className="md:w-1/2 w-full space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.date && (
                  <p className="text-sm text-blue-600/80 dark:text-blue-400/80 font-bold uppercase tracking-wider mb-1">
                    {project.date}
                  </p>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  {project.title.includes(':') ? (
                    <>
                      <span className="block text-blue-600 dark:text-blue-400 mb-1">
                        {project.title.split(':')[0]}
                      </span>
                      <span className="text-2xl md:text-3xl font-semibold opacity-80">
                        {project.title.split(':')[1]}
                      </span>
                    </>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-sm md:text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex items-center gap-6 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 font-bold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-12.087 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-bold hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>

              {/* Media Side */}
              <div className="media-container md:w-1/2 w-full h-[400px] relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
                <button 
                  onClick={handleFullScreen}
                  className="absolute top-4 right-4 z-20 bg-white/20 dark:bg-black/20 backdrop-blur-md p-2 rounded-xl hover:bg-white/40 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                </button>

                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">No demo video available</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
