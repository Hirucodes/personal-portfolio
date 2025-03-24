import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    {/* Desktop Navigation */}
                    <div className="flex justify-between items-center">
                        {/* Your Name on Left */}
                        <h1 className="text-xl font-bold">
                            <span className="text-white">Hirusha</span>
                            <span className="text-blue-500">.Nayanajith</span>
                        </h1>

                        {/* Navigation Buttons on Right */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-8">
                                <a href="#home" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    Home
                                </a>
                                <a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    About
                                </a>
                                <a href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    Projects
                                </a>
                                <a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    Contact
                                </a>
                            </div>
                            {/* Mobile Menu Button */}
                            <button 
                                className="md:hidden text-gray-300"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40">
                    {/* Blur Overlay */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    
                    {/* Menu Items */}
                    <div className="relative h-screen flex items-center justify-center">
                        <div className="flex flex-col items-center gap-8">
                            <a 
                                href="#home" 
                                className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>
                            <a 
                                href="#about" 
                                className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                            <a 
                                href="#projects" 
                                className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </a>
                            <a 
                                href="#contact" 
                                className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};