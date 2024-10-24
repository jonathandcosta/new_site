import React from 'react';
import style from '../Content/Form.module.css';
import Check from '../../Assests/icons/check.svg?react';
import Send from '../../Assests/icons/send.svg?react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (nome === '' || email === '' || mensagem === '')
      alert('Fill in all fields');

    const templateParams = {
      from_name: nome,
      email: email,
      message: mensagem,
    };

    emailjs
      .send(
        'service_8gen6so',
        'template_ftejs44',
        templateParams,
        'irq-jEKexZDvm62Fh',
      )
      .then(
        (response) => {
          console.log('Email enviado', response.status, response.text);
          setNome('');
          setEmail('');
          setMensagem('');
        },
        (err) => {
          console.log('Unexpected Error, please submit again.', err);
        },
      );
  }

  return (
    <>
      <section className="container">
        <p className="subtitle">
          Your search for a qualified professional ends here!
        </p>
        <div className={style.card}>
          <p className={style.titulo}>
            <Check /> Do you want a leader for your e-commerce?
          </p>
          <p className={style.description1}>
            I transform your e-commerce with leading performance and
            optimization strategies. If you are looking to see real results and
            improve your website's results and experience, I can help. Let's
            work together!
            <br /> <br /> I offer complete consultancy for your e-commerce,
            covering all fronts of action, from the development and
            implementation of functionalities to the optimization of processes
            and sales strategies.
          </p>
        </div>
        <div className={style.card}>
          <p className={style.titulo}>
            <Check /> Do you need a Frontend developer for your project?
          </p>
          <p className={style.description1}>
            I am specialized in developing front-end, creating and integrating
            new layouts and features, as well as modern and efficient
            interfaces. I have experience in configuring marketing emails and
            automations to enhance campaigns, always working collaboratively
            with design teams.
            <br /> <br /> I also perform website maintenance, integrating
            payment systems, databases and ERP, ensuring that all operations
            work seamlessly and securely.
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
      <section className="container">
        <p className="subtitle">Want customized solutions?</p>
        <p className="description">Let me know your contact and project!</p>
        <form onSubmit={sendEmail}>
          <div className={style.namesForm}>
            <input
              placeholder="Full Name"
              id="nome"
              required
              type="text"
              name="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <input
              placeholder="Email Adress"
              id="email"
              required
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <textarea
            placeholder="Your Message"
            id="mensagem"
            required
            value={mensagem}
            rows="10"
            onChange={({ target }) => setMensagem(target.value)}
          ></textarea>
          <button>
            <Send /> Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
