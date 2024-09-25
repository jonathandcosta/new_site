import React from 'react';
import style from './Projects.module.css';
import bikcraft from '../../Assests/projetos/bikcraft.png';
import beautySalon from '../../Assests/projetos/beautysalon.png';
import fineze from '../../Assests/projetos/fineze.png';
import efood from '../../Assests/projetos/efood.png';
import menu from '../../Assests/projetos/menu.png';
import style_salão from '../../Assests/projetos/style_salão.png';
import eplay from '../../Assests/projetos/eplay.png';
import pass from '../../Assests/projetos/pass.png';

const Projects = () => {
  return (
    <section className="container">
      <div className={style.fullCard}>
        <div className={style.card}>
          <img src={bikcraft} alt="projeto bikcraft" />
          <div className={style.goProject}>
            <a
              className="name"
              href="http://bikcraft-final-five.vercel.app/"
              target="_blank"
            >
              Bikraft
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={menu} alt="projeto menu digital" />
          <div className={style.goProject}>
            <a
              className="name"
              href="https://e-menu-mu.vercel.app/"
              target="_blank"
            >
              E-Menu Digital
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={pass} alt="projeto cadastro de evento" />
          <div className={style.goProject}>
            <a
              className="name"
              href="https://pass-cooking.vercel.app/"
              target="_blank"
            >
              Pass-IN Cooking
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={eplay} alt="projeto ecommerce de jogos" />
          <div className={style.goProject}>
            <a
              className="name"
              href="https://eplay-one.vercel.app/"
              target="_blank"
            >
              E-Commerce Eplay
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={efood} alt="projeto Restaurantes Efood" />
          <div className={style.goProject}>
            <a
              className="name"
              href="https://react-ecommerce-efood.vercel.app/"
              target="_blank"
            >
              Restaurantes Efood
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={beautySalon} alt="projeto beutysalon" />
          <div className={style.goProject}>
            <a
              className="name"
              href="https://beauty-salon-beta.vercel.app/"
              target="_blank"
            >
              BeautySalon
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={style_salão} alt="projeto salão de barbearia" />
          <div className={style.goProject}>
            <a
              className="name"
              href="https://style-salao-bootstrap.vercel.app/"
              target="_blank"
            >
              Barbearia
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={fineze} alt="projeto restaurante fineze" />
          <div className={style.goProject}>
            <a
              className="name"
              href="https://restaurant-three-sigma.vercel.app/"
              target="_blank"
            >
              Restaurante Fineze
            </a>
            <p className="description">Web Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
