import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// COMPONENTS
import Navbar from './components/Navbar';

function app() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default app;
