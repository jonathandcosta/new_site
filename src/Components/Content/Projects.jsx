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
import Visu from '../../Assests/icons/visualizacao.svg';

const Projects = () => {
  return (
    <section className="container">
      <div className={style.fullCards}>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={bikcraft}
              alt="projeto bikcraft"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a
                  href="http://bikcraft-final-five.vercel.app/"
                  target="_blank"
                >
                  Bikraft
                </a>
                <span className="description">
                  <img src={Visu} alt="" />
                </span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name">Bikraft</span>
            <span className="description">Web Development</span>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={menu}
              alt="projeto menu digital"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a href="https://e-menu-mu.vercel.app/" target="_blank">
                  E-Menu
                </a>
                <span className="description">Web Development</span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name">E-Menu</span>
            <span className="description">Web Development</span>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={pass}
              alt="projeto cadastro de evento"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a href="https://pass-cooking.vercel.app/" target="_blank">
                  Pass-IN
                </a>
                <span className="description">Web Development</span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name">Pass-IN Cooking</span>
            <span className="description">Web Development</span>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={eplay}
              alt="projeto ecommerce de jogos"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a href="https://eplay-one.vercel.app/" target="_blank">
                  Eplay
                </a>
                <span className="description">Web Development</span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name">E-Commerce Eplay</span>
            <span className="description">Web Development</span>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={efood}
              alt="projeto Restaurantes Efood"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a
                  href="https://react-ecommerce-efood.vercel.app/"
                  target="_blank"
                >
                  Efood
                </a>
                <span className="description">Web Development</span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name"> Restaurant Efood</span>
            <span className="description">Web Development</span>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={beautySalon}
              alt="projeto beutysalon"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a href="https://beauty-salon-beta.vercel.app/" target="_blank">
                  BeautySalon
                </a>
                <span className="description">Web Development</span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name">BeautySalon</span>
            <span className="description">Web Development</span>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={style_salão}
              alt="projeto salon barber"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a
                  href="https://style-salao-bootstrap.vercel.app/"
                  target="_blank"
                >
                  Barber Shop
                </a>
                <span className="description">Web Development</span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name">Barber Shop</span>
            <span className="description">Web Development</span>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={fineze}
              alt="projeto restaurant fineze"
            />
            <div className={style.overlay}>
              <p className={style.overlayName}>
                <a
                  href="https://restaurant-three-sigma.vercel.app/"
                  target="_blank"
                >
                  Fineze
                </a>
                <span className="description">Web Development</span>
              </p>
            </div>
          </div>
          <div className={style.subTitle}>
            <span className="name">Restaurant Fineze</span>
            <span className="description">Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
