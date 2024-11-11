import React from 'react';
import Header from '../Components/Header/Header';
import Form from '../Content/Form/Form';
import Faq from '../Content/Faq';
import Questions from '../Content/Questions';

const Contact = () => {
  return (
    <section className="anime">
      <div className="border_page">
        <Header />
        <Faq />
        <Form />
        <Questions />
      </div>
    </section>
  );
};

export default Contact;
