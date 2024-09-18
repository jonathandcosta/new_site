import React from 'react';
import Header from '../Header/Header';
import Education from '../Content/Education';
import Experience from '../Content/Experience';

const Resume = () => {
  return (
    <>
      <section className="anime">
        <div className="border_page">
          <Header />
          <Education />
          <Experience />
        </div>
      </section>
    </>
  );
};

export default Resume;
