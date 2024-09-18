import React from 'react';
import Card from '../Card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Portifolio from '../Pages/Portifolio';

const Main = () => {
  return (
    <div className="main">
      <Card />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portifolio" element={<Portifolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
