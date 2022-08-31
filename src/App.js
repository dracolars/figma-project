import './index.css'
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'

function App() {
  return (
   <div>
      <Navbar/>
      <Slideshow/>
      <Home/>
      <Footer/>
   </div>
  );
}

export default App;
