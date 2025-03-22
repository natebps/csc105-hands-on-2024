import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from './assets/navbar';
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import Gallery from './pages/gallery'

function App() {
  return <>
    <div>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Gallery/>
    </div>
  </>;
}

export default App;
