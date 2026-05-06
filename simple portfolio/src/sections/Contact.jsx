const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-5xl w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <a 
            href="mailto:armanrayma10@gmail.com"
            className="group flex flex-col items-center justify-center p-10 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-purple-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 mb-6 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 text-3xl group-hover:scale-110 transition-transform">📧</div>
            <h4 className="text-2xl font-bold dark:text-white mb-2">Email</h4>
            <p className="text-gray-600 dark:text-gray-400 group-hover:text-purple-500 transition-colors">armanrayma10@gmail.com</p>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/arman-rayma"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-10 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-[#0A66C2]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 mb-6 bg-[#0A66C2]/10 rounded-2xl flex items-center justify-center text-[#0A66C2] text-3xl group-hover:scale-110 transition-transform">💼</div>
            <h4 className="text-2xl font-bold dark:text-white mb-2">LinkedIn</h4>
            <p className="text-gray-600 dark:text-gray-400 group-hover:text-[#0A66C2] transition-colors">linkedin.com/in/arman-rayma</p>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/armanraymagit"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-10 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 mb-6 bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white text-3xl group-hover:scale-110 transition-transform">💻</div>
            <h4 className="text-2xl font-bold dark:text-white mb-2">GitHub</h4>
            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">github.com/armanraymagit</p>
          </a>

          {/* Location Card */}
          <div className="group flex flex-col items-center justify-center p-10 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mb-6 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 text-3xl group-hover:scale-110 transition-transform">📍</div>
            <h4 className="text-2xl font-bold dark:text-white mb-2">Location</h4>
            <p className="text-gray-600 dark:text-gray-400 text-center">Available worldwide for remote collaborations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

