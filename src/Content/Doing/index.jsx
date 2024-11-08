import React from 'react';
import style from '../Doing/style.module.css';
import Cabeca from '../../Assests/icons/web.svg?react';
import School from '../../Assests/icons/school.svg?react';
import Language from '../../Assests/icons/language.svg?react';
import Mobile from '../../Assests/icons/mobile.svg?react';

const Doing = () => {
  return (
    <section className="container">
      <p className="subtitle">What I'm Doing</p>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.icon}>
            <Cabeca />
          </div>
          <div>
            <p className="name">Web Developer</p>
            <p className="description">
              I create impactful digital experiences through development.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <School />
          </div>
          <div>
            <p className="name">University</p>
            <p className="description">
              Studying Computer Science at university to further my career in
              technology.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <Mobile />
          </div>
          <div>
            <p className="name">Apps Developer</p>
            <p className="description">
              I develop intuitive and functional applications for different
              platforms.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <Language />
          </div>
          <div>
            <p className="name">Idiom</p>
            <p className="description">
              Expanding my language skills for efficient global communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doing;
