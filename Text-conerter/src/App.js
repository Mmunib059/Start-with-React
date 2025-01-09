import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Component/Navbar/Navbar.jsx';
import Textform from './Component/Navbar/Textform.js';
import About from './Component/About/About.js';
import { createBrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar Textapp='Muneeb' />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Textform />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
