import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Resume from '../Pages/Resume';

const Main = () => {
  return (
    <section className="anime">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default Main;
