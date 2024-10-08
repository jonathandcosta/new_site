import React from 'react';
import style from '../Content/Form.module.css';

const Form = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  return (
    <section className="container">
      <p className="subtitle">Contact me Now</p>
      <div className={style.content}>
        <form>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            value={mensagem}
            rows="5"
            onChange={({ target }) => setMensagem(target.value)}
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
