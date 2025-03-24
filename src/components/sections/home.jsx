import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export const Home = () => {
    return (
        <section id="home" className="min-h-screen pt-20 flex items-center justify-center bg-black">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="flex flex-col items-center text-center">
                    {/* Big Text with Blue Highlight */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        
                        <div className="text-white">
                            Hi, <span className="text-blue-500">I'm Hirusha Nayanajith</span>
                        </div>
                        
                    </h1>
                    
                    {/* Description Box */}
                    <div className="mt-8 mb-8 max-w-2xl bg-transparent border-2 border-blue-500 rounded-xl p-8 hover:bg-blue-500/10 transition-all duration-300">
                        <div className="flex items-center justify-center mb-6">
                            <FaCode className="text-blue-500 text-3xl" />
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Passionate web developer dedicated to creating elegant and 
                            responsive web applications. Combining creativity with technical 
                            expertise to build seamless user experiences that leave a lasting 
                            impression.
                        </p>
                        
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 mb-8">
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>

                    {/* Contact Button */}
                    <a 
                        href="#contact" 
                        className="inline-block px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                        Let's Connect
                    </a>
                </div>
            </div>
        </section>
    );
};