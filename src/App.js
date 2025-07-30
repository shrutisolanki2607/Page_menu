import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/index'
import SideBar from './components/SideBar/index'
import HeroSection from './components/HeroSection/index'

function App() {
  const [input , setInput] = useState("")
  return (
    <div className="App">
        <Navigation input={input} setInput={setInput}/>
        <div style={{display: "flex"}}>
        <SideBar/>
        <HeroSection/>
        </div>
    </div>
  );
}

export default App;
