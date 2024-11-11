import React from 'react';
import style from './style.module.css';
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
        <p className={style.subtitle}>Want customized solutions?</p>
        <p className={style.description1}>
          Let me know your contact and project!
        </p>
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
