import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar';
import Home from '../src/Components/Navbar/Home/Home';
import Menu from '../src/Components/Pages/Menu';
import Project from './Components/Pages/Project';
import Services from './Components/Pages/Services';       

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <div className="img">
        <img 
          src="https://png.pngtree.com/background/20240723/original/pngtree-sleek-and-modern-3d-black-luxury-house-picture-image_9827916.jpg" 
          alt="Luxury House" 
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
