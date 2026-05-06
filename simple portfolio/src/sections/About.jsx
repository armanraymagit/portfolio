import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-gray-800 dark:text-gray-100 px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual/Decoration */}
          <div className="relative group hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-square bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl flex items-center justify-center p-12 shadow-2xl overflow-hidden">
               <div className="text-9xl transform group-hover:scale-110 transition-transform duration-500">👨‍💻</div>
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white leading-tight">
              Crafting <span className="text-blue-500">Digital</span> Experiences
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                Hey there! 👋 I’m <span className="font-bold text-gray-900 dark:text-white">Arman Rayma</span>, a dedicated developer with a mission to bridge the gap between complex logic and stunning design.
              </p>
              
              <p>
                I specialize in <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Development</span> and am deeply passionate about <span className="text-purple-600 dark:text-purple-400 font-semibold">AI Integration</span>. My goal is to build secure, intelligent applications that provide real value to users.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-2xl">
                  <h4 className="text-blue-500 font-bold mb-1">Passionate</h4>
                  <p className="text-sm">Driven by innovation</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-2xl">
                  <h4 className="text-purple-500 font-bold mb-1">Strategic</h4>
                  <p className="text-sm">Problem solver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
