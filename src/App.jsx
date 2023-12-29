import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// COMPONENTS
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/anime-web/' element={<Home />} />
          <Route path='/anime-web/about' element={<About />} />
          <Route path='/anime-web/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
