import { useEffect } from "react"

export const MobileMenu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div 
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-50 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <button 
        onClick={() => setmenuOpen(false)} 
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="close menu"
      > 
        &times;
      </button>
      <nav className="flex flex-col items-center gap-8">
        <a 
          href="#home" 
          onClick={() => setmenuOpen(false)}
          className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors"
        >
          Home
        </a>
        <a 
          href="#about"
          onClick={() => setmenuOpen(false)}
          className="text-2xl text-white hover:text-gray-300 transition-colors"
        >
          About
        </a>
        <a 
          href="#projects"
          onClick={() => setmenuOpen(false)}
          className="text-2xl text-white hover:text-gray-300 transition-colors"
        >
          Projects
        </a>
        <a 
          href="#contact"
          onClick={() => setmenuOpen(false)}
          className="text-2xl text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  )
}