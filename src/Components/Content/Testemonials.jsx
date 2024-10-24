import React from 'react';
import style from './Testemonials.module.css';
import allan from '../../Assests/img/allan.png';
import moroni from '../../Assests/img/moroni.png';
import alvaro from '../../Assests/img/alvaro.png';
import monaliza from '../../Assests/img/monaliza.png';
import leandro from '../../Assests/img/leandro.png';

const Testemonials = () => {
  return (
    <>
      <section className="container">
        <p className="subtitle">Recommendations</p>
      </section>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.icon}>
            <img src={monaliza} alt="" />
          </div>
          <div className={style.box}>
            <p className="name">Monaliza Dantas</p>
            <p className="description">
              An excellent leader and boss. Always looking for ways to improve
              the team's performance and ensure that everything is done
              efficiently. Super honest and willing to help everyone, both at
              work and in social life.
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
              Excellent professional and one of the most qualified leaders I
              have ever worked with. Ethical, committed and motivating, and
              mainly focused on high-performance results.
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
              A very dedicated and hard-working professional in his actions and
              studies in his field. With dedication, he learns and applies new
              skills efficiently and consistently.
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
              Jonathan is an extremely dedicated professional who pursues his
              goals with great dedication. Any company/project will be lucky to
              have him on their team.
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
    </>
  );
};

export default Testemonials;
