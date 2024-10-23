import React from 'react';
import Header from '../Header/Header';
import Form from '../Content/Form';
import ContactMe from '../Content/ContactMe';

const Contact = () => {
  return (
    <section className="anime">
      <div className="border_page">
        <Header />
        <ContactMe />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
