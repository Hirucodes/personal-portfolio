import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/loadingscreen'
import "./index.css";
import { Navbar } from './components/Navbar';

function App() {
  const [isloaded, setIsloaded] = useState(false);
  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsloaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar />
      
      </div>
    </>
  )
}

export default App
