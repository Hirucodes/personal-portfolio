export const About = () => {
    return (
      <section 
        id="about"
        className="min-h-screen flex items-center justify-center py-20 bg-black"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            About me 👤
          </h2>
          <div className="space-y-12">
            <div className="text-center flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-transparent  border-blue-500 rounded-lg text-gray-300 hover:bg-blue-600/10 transition-colors duration-300">
                Hi, I'm Hirusha Nayanajith
              a passionate web developer
              focused on creating beautiful
              and functional websites
              </span>
            </div>
            <
                div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-transparent border-1 border-blue-500 p-8 rounded-xl text-center hover:bg-blue-600/10 transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-blue-500 mb-6">Education 🎓</h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-blue-900/20">
                    <h4 className="text-lg font-semibold text-white">BSc (Hons) in Cmputing And Information System</h4>
                    <p className="text-gray-400 mt-2">SABARAGAMUWA UNIVERSITY OF SRILANKA</p>
                    <p className="text-blue-400 mt-1">2023 - Present</p>
                  </div>
                  <
                    div className="p-4 rounded-lg bg-blue-900/20">
                    <h4 className="text-lg font-semibold text-white">Advanced Level</h4>
                    <p className="text-gray-400 mt-2">wellassa madya Vidyalaya</p>
                    <p className="text-blue-400 mt-1">2018 - 2020</p>
                  </div>
                </div>
              </div>

              <
                div className="bg-transparent border-1 border-blue-500 p-8 rounded-xl text-center hover:bg-blue-600/10 transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-blue-500 mb-6">Work Experience 💼</h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-blue-900/20">
                    <h4 className="text-lg font-semibold text-white">Graphic designer</h4>
                    <p className="text-gray-400 mt-2">GR Graphic Home</p>
                    <p className="text-blue-400 mt-1">2022 - Present</p>
                  </div>
                  <
                    div className="p-4 rounded-lg bg-blue-900/20">
                    <h4 className="text-lg font-semibold text-white">Web And Graphic Designer</h4>
                    <p className="text-gray-400 mt-2">Freelance</p>
                    <p className="text-blue-400 mt-1">2024</p>
                  </div>
                </div>
              </div>
            </div>

            <
                div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-transparent border-1 border-blue-600 p-8 rounded-xl text-center hover:bg-blue-600/10 transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-WHITE-500 mb-6">Frontend 📱 </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">React</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">HTML</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">CSS</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">JavaScript</span>
                </div>
              </div>
              <
                div className="bg-transparent border-1 border-blue-600 p-8 rounded-xl text-center hover:bg-blue-600/10 transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-WHITE-500 mb-6">Backend 💾</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">Node.js</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">Express</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">MongoDB</span>
                </div>
              </div>
              <div className="bg-transparent border-1 border-blue-600 p-8 rounded-xl text-center hover:bg-blue-600/10 transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-WHITE-500 mb-6">Tools 🛠️</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">Git</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">VS Code</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">Figma</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">cursor</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">PSD</span>
                </div>
              </div>
              <div className="bg-transparent border-1 border-blue-600 p-8 rounded-xl text-center hover:bg-blue-600/10 transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-WHITE-500 mb-6">Design 🎨</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };