import { useEffect } from "react"

export const MobileMenu = ({ menuOpen, setmenuOpen }) => {
  const handleClick = (id) => {
    setmenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button 
        onClick={() => setmenuOpen(false)} 
        className="absolute top-6 right-6 text-white text-3xl hover:text-blue-500 transition-colors"
        aria-label="close menu"
      > 
        ×
      </button>
      <nav className="flex flex-col items-center gap-8">
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <button 
            key={item}
            onClick={() => handleClick(item)}
            className="text-2xl text-white hover:text-blue-500 transition-colors capitalize"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  )
}