import React from 'react';
import Card from '../Components/Card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Portifolio from '../Pages/Portifolio';
import Contact from '../Pages/Contact';
import Certificates from '../Pages/Certficates';

const Main = () => {
  return (
    <div className="main">
      <Card />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="resume" element={<Resume />} />
          <Route path="portifolio" element={<Portifolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
