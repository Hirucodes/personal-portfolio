export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 bg-black"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Featured Projects 🔧
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                    <div className="bg-transparent border-1 border-blue-600 p-6 rounded-xl text-left hover:bg-blue-600/10 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white-500 mb-4">Voice Converter 🎧</h3>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                            A Voice Converter converts speech into text and text into speech for enhanced accessibility and convenience. <br /> <br />
                            ✅ Speech-to-Text <br />
                            ✅ Text-to-Speech <br />
                            ✅ Voice Modulation</p> <br />
                            <div className="flex flex-wrap gap-2 justify-left">
                                {["JAVA", "CSS", "HTML",].map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href="#" 
                                className="inline-block mt-4 text-blue-500 hover:text-blue-400 transition-colors duration-300 border-b-2 border-blue-500 hover:border-blue-400"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

              
                    <div className="bg-transparent border-1 border-blue-600 p-6 rounded-xl text-left hover:bg-blue-600/10 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white-500 mb-4">Personal Portfolio 👨‍💻</h3>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                            A personal portfolio website to showcase my skills, projects, and contact information in a stylish, responsive layout. <br /> <br />
                                ✅ Home Section <br />
                                ✅ About Section <br />
                                ✅ Projects Section <br />
                                ✅ Contact Section </p>
                            <div className="flex flex-wrap gap-2 justify-left">
                                {["React", "Tailwind.css", "API",].map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href="#" 
                                className="inline-block mt-4 text-blue-500 hover:text-blue-400 transition-colors duration-300 border-b-2 border-blue-500 hover:border-blue-400"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="bg-transparent border-1 border-blue-600 p-6 rounded-xl text-left hover:bg-blue-600/10 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white-500 mb-4">Digital-clock ⏰ </h3>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                            A live digital clock that updates every second, showing the current time with a clean and minimal design. <br /> <br />
                            ✅ Live time update <br />
                            ✅ Clean and modern UI <br />
                            ✅ Responsive design <br /><br />


                            </p>
                            <div className="flex flex-wrap gap-2 justify-left">
                                {["HTML", "CSS", "API", ].map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href="#" 
                                className="inline-block mt-4 text-blue-500 hover:text-blue-400 transition-colors duration-300 border-b-2 border-blue-500 hover:border-blue-400"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="bg-transparent border-1 border-blue-600 p-6 rounded-xl text-left hover:bg-blue-600/10 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white-500 mb-4">Weather Dashboard 🌤️</h3>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                            A real-time weather application that displays current conditions, forecasts, and severe weather alerts for locations <br /> <br />
                            ✅ Responsive design <br />
                            ✅ Simple & clean layout <br />
                            ✅ Uses icons for weather representation</p> <br />
                            <div className="flex flex-wrap gap-2 justify-left">
                                {["HTML", "API", "CSS", ].map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-blue-500/10 border border-blue-500 rounded-full text-blue-400 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href="https://github.com/Hirucodes/weather-app" 
                                className="inline-block mt-4 text-blue-500 hover:text-blue-400 transition-colors duration-300 border-b-2 border-blue-500 hover:border-blue-400"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};