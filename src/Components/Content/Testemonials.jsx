import React from 'react';
import style from './Testemonials.module.css';

const Testemonials = () => {
  return (
    <section className="container">
      <p className="subtitle">Testemonials</p>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.icon}></div>
          <div className={style.box}>
            <p className="name">Web Developer</p>
            <p className="description">
              I create impactful digital experiences through the development.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}></div>
          <div className={style.box}>
            <p className="name">Web Developer</p>
            <p className="description">
              I create impactful digital experiences through the development.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}></div>
          <div className={style.box}>
            <p className="name">Web Developer</p>
            <p className="description">
              I create impactful digital experiences through the development.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}></div>
          <div className={style.box}>
            <p className="name">Web Developer</p>
            <p className="description">
              I create impactful digital experiences through the development.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}></div>
          <div className={style.box}>
            <p className="name">Web Developer</p>
            <p className="description">
              I create impactful digital experiences through the development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
