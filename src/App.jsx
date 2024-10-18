import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Health from './pages/Health';
import Personal from './pages/Personal';
import Shopping from './pages/Shopping';
import Household from './pages/Household';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for Academics page */}
        <Route path="/Academics" element={<Academics />} />

        <Route path="/Health" element={<Health />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Household" element={<Household />} />
      </Routes>
    </Router>
  );
}

export default App;
