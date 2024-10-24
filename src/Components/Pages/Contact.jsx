import React from 'react';
import Header from '../Header/Header';
import Form from '../Content/Form';
import ContactPit from '../Contact/Contact_pit';

const Contact = () => {
  return (
    <section className="anime">
      <div className="border_page">
        <Header />
        <ContactPit />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
