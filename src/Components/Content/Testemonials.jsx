import React from 'react';
import style from './Testemonials.module.css';
import allan from '../../Assests/img/allan.png';
import moroni from '../../Assests/img/moroni.png';
import alvaro from '../../Assests/img/alvaro.png';
import monaliza from '../../Assests/img/monaliza.png';
import leandro from '../../Assests/img/leandro.png';

const Testemonials = () => {
  return (
    <section className="container">
      <p className="subtitle">Recommendations</p>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.icon}>
            <img src={monaliza} alt="" />
          </div>
          <div className={style.box}>
            <p className="name">Monaliza Dantas</p>
            <p className="description">
              Un excelente líder e chefe. Sempre buscando maneiras de melhorar o
              rendimento da equipe e de que tudo seja feito de maneira eficaz.
              Super honesto e disposto a ajudar a todos, seja no ambiente de
              trabalho e na vida social.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <img src={leandro} alt="" />
          </div>
          <div className={style.box}>
            <p className="name">Leandro Domingos</p>
            <p className="description">
              Excelente profissional e um dos mais gabaritados líderes em que já
              trabalhei. ético, Comprometido e motivador e principalmente focado
              em resultados de alta performance.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <img src={moroni} alt="" />
          </div>
          <div className={style.box}>
            <p className="name">Moroni Macedo</p>
            <p className="description">
              Profissional muito dedicado e esforçado em suas ações e nos
              estudos em sua área de atuação. Com dedicação, aprende e aplica
              novas habilidades com eficiência e constância.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <img src={alvaro} alt="" />
          </div>
          <div className={style.box}>
            <p className="name">Alvaro Jr.</p>
            <p className="description">
              Jonathan é um profissional extremamente dedicado e busca seus
              objetivos com muito empenho. Qualquer empresa/projeto terá sorte
              de tê-lo em seu time.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <img src={allan} alt="" />
          </div>
          <div className={style.box}>
            <p className="name">Allan J. Martins</p>
            <p className="description">
              Super reliable and harder worker. Really know what he o doing.
              Strongly recommend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
