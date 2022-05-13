import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Developer from './components/Developer/Developer';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
