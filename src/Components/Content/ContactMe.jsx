import React from 'react';
import style from '../Content/ContactMe.module.css';

const ContactMe = () => {
  return (
    <section className="container">
      <p className="subtitle">
        Your search for a qualified professional ends here!
      </p>
      <div className={style.card}>
        <p className={style.titulo}>
          ✔ Do you want a leader for your e-commerce?
        </p>
        <p className={style.description1}>
          I transform your e-commerce with leading performance and optimization
          strategies. If you are looking to see real results and improve your
          website's results and experience, I can help. Let's work together!
          <br /> <br /> I offer complete consultancy for your e-commerce,
          covering all fronts of action, from the development and implementation
          of functionalities to the optimization of processes and sales
          strategies.
        </p>
      </div>
      <div className={style.card}>
        <p className={style.titulo}>
          ✔ Do you need a Frontend developer for your project?
        </p>
        <p className={style.description1}>
          I am specialized in developing front-end, creating and integrating new
          layouts and features, as well as modern and efficient interfaces. I
          have experience in configuring marketing emails and automations to
          enhance campaigns, always working collaboratively with design teams.
          <br /> <br /> I also perform website maintenance, integrating payment
          systems, databases and ERP, ensuring that all operations work
          seamlessly and securely.
        </p>
      </div>
      <div>
        <p className={style.finaly}>
          If you need a professional who combines strategic vision, advanced
          technical skills and a focus on results, or are looking for
          specialized consulting for e-commerce, get in touch. Let's develop
          solutions together that will take your business to the next level!
        </p>
      </div>
    </section>
  );
};

export default ContactMe;
