import React from 'react';
import style from './Doing.module.css';
import Cabeca from '../../Assests/icons/cabeca.svg?react';
import School from '../../Assests/icons/school.svg?react';
import Language from '../../Assests/icons/language.svg?react';
import Mobile from '../../Assests/icons/mobile.svg?react';

const Doing = () => {
  return (
    <section className={style.doing_container}>
      <p className={style.subtitle}>What I'm Doing</p>
      <div className={style.cards}>
        <div className={style.card}>
          <Cabeca />
          <div>
            <p className={style.name}>Web Developer</p>
            <p className={style.description}>
              I create impactful digital experiences through the development of
              modern and responsive websites
            </p>
          </div>
        </div>
        <div className={style.card}>
          <School />
          <div>
            <p className={style.name}>University</p>
            <p className={style.description}>
              Studying Computer Science at university to further my career in
              technology.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <Mobile />
          <div>
            <p className={style.name}>Apps Developer</p>
            <p className={style.description}>
              I develop intuitive and functional applications for different
              platforms.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <Language />
          <div>
            <p className={style.name}>Idiom</p>
            <p className={style.description}>
              Expanding my language skills for efficient global communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doing;
