import React from 'react';
import style from './SoftSkills.module.css';

const SoftSkills = () => {
  return (
    <>
      <section className="container">
        <p className="subtitle">Soft Skills</p>
      </section>
      <div className={style.skroll}>
        <div>
          <span>Clear Communication</span>
          <span>Critical thinking</span>
          <span>Teamwork</span>
          <span>Adaptability</span>
          <span>Leadership</span>
        </div>
        <div>
          <span>Clear Communication</span>
          <span>Critical thinking</span>
          <span>Teamwork</span>
          <span>Adaptability</span>
          <span>Leadership</span>
        </div>
      </div>
    </>
  );
};

export default SoftSkills;
