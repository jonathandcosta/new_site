import React from 'react';
import Header from '../Header/Header';
import About_me from '../Content/About_me';
import Doing from '../Content/Doing';
import Testemonials from '../Content/Testemonials';

const About = () => {
  return (
    <section className="anime">
      <div className="border_page">
        <Header />
        <About_me />
        <Doing />
        <Testemonials />
      </div>
    </section>
  );
};

export default About;
