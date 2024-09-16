import React from 'react';
import style from './Card.module.css';
import avatar from '../../Assests/img/avatar.png';
import Email from '../../Assests/icons/email.svg?react';
import Phone from '../../Assests/icons/phone.svg?react';
import Birthday from '../../Assests/icons/calendar.svg?react';
import Location from '../../Assests/icons/location.svg?react';
import Linkedin from '../../Assests/icons/linkedin.png';
import Github from '../../Assests/icons/github.png';
import Instagram from '../../Assests/icons/instagram.png';

const Card = () => {
  return (
    <>
      <div className="anime">
        <section className={style.side_card}>
          <div className={style.header}>
            <img src={avatar} alt="" />
            <h3>Jonathan D. Costa</h3>
            <button>Frontend Developer</button>
            <span></span>
          </div>

          {/* INICIO DAS INFORMAÇÕES PESSOAIS */}
          <div className={style.informations}>
            <div className={style.infos}>
              <div className={style.icon}>
                <Email />
              </div>
              <div>
                <h4 className="name">EMAIL</h4>
                <p className="description">jddatsoc@gmail.com</p>
              </div>
            </div>
            <div className={style.infos}>
              <div className={style.icon}>
                <Phone />
              </div>
              <div className={style.infos_name}>
                <h4 className="name">PHONE</h4>
                <p className="description">+55 (84) 9 9904-3539</p>
              </div>
            </div>
            <div className={style.infos}>
              <div className={style.icon}>
                <Birthday />
              </div>
              <div className={style.infos_name}>
                <h4 className="name">BIRTHDAY</h4>
                <p className="description">May 28, 1985</p>
              </div>
            </div>
            <div className={style.infos}>
              <div className={style.icon}>
                <Location />
              </div>
              <div className={style.infos_name}>
                <h4 className="name">LOCATION</h4>
                <p className="description">Natal, Brasil</p>
              </div>
            </div>
          </div>
          <div className={style.midias}>
            <a href="">
              <img src={Linkedin} alt="" />
            </a>
            <a href="">
              <img src={Github} alt="" />
            </a>
            <a href="">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
