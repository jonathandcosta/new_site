import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from '../About/About';
import Resume from '../Resume/Resume';

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
