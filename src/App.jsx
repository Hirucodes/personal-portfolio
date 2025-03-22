import { useState } from 'react';
import './App.css';
import "./index.css";
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/loadingscreen';
import { MobileMenu } from './components/mobilemenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/about';  // make sure this path is correct

function App() {
  const [isloaded, setIsloaded] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsloaded(true)} />}
      <div className={`transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <div className="bg-black">
          <Home />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;