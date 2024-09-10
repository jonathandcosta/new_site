import React from 'react';
import Card from '../Card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Resume from '../Pages/Resume';

const Main = () => {
  return (
    <div className="main">
      <Card />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
