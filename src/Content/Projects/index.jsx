import React from 'react';
import style from '../Projects/style.module.css';
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
              alt="projeto bikcraft store's bike "
            />
            <div className={style.overlay}>
              <div className={style.overlayName}>
                <a
                  href="http://bikcraft-final-five.vercel.app/"
                  target="_blank"
                >
                  Bikcraft
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name">Store Bikcraft</span>
            <span className={style.description}>Web Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                height="20"
                alt="figma logo"
                title="figma logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="20"
                alt="javascript logo"
                title="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
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
              <div className={style.overlayName}>
                <a href="https://beauty-salon-beta.vercel.app/" target="_blank">
                  BeautySalon
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name">BeautySalon</span>
            <span className={style.description}>Frontend Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="20"
                alt="javascript logo"
                title="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
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
              <div className={style.overlayName}>
                <a href="https://e-menu-mu.vercel.app/" target="_blank">
                  E-Menu
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name">E-Menu</span>
            <span className={style.description}>Web Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
                height="20"
                alt="trello logo"
                title="trello logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                height="20"
                alt="figma logo"
                title="figma logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="20"
                alt="javascript logo"
                title="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
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
              <div className={style.overlayName}>
                <a
                  href="https://style-salao-bootstrap.vercel.app/"
                  target="_blank"
                >
                  Barber Shop
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name">Barber Shop</span>
            <span className={style.description}>Frontend Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="20"
                alt="javascript logo"
                title="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                height="20"
                alt="jquery logo"
                title="jquery logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
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
              <div className={style.overlayName}>
                <a
                  href="https://restaurant-three-sigma.vercel.app/"
                  target="_blank"
                >
                  Fineze
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name">Restaurant Fineze</span>
            <span className={style.description}>Frontend Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="20"
                alt="javascript logo"
                title="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                height="20"
                alt="jquery logo"
                title="jquery logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
          </div>
        </div>

        {/* projetos com react */}
        <div>
          <div className={style.card}>
            <img
              className={style.image}
              src={pass}
              alt="projeto cadastro de evento"
            />
            <div className={style.overlay}>
              <div className={style.overlayName}>
                <a href="https://pass-cooking.vercel.app/" target="_blank">
                  Pass-IN
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name">Pass-IN Cooking</span>
            <span className={style.description}>Web Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                height="20"
                alt="tailwindcss logo"
                title="tailwindcss logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height="20"
                alt="react logo"
                title="react logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                height="20"
                alt="typescript logo"
                title="typescript logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
                height="20"
                alt="eslint logo"
                title="eslint logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
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
              <div className={style.overlayName}>
                <a href="https://eplay-one.vercel.app/" target="_blank">
                  Eplay
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name">E-Commerce Eplay</span>
            <span className={style.description}>Web Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                height="20"
                alt="figma logo"
                title="figma logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height="20"
                alt="react logo"
                title="react logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                height="20"
                alt="typescript logo"
                title="typescript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                height="20"
                alt="redux logo"
                title="redux logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
                height="20"
                alt="eslint logo"
                title="eslint logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
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
              <div className={style.overlayName}>
                <a
                  href="https://react-ecommerce-efood.vercel.app/"
                  target="_blank"
                >
                  Efood
                </a>
                <span>
                  <img src={Visu} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.subTitles}>
            <span className="name"> Restaurant Efood</span>
            <span className={style.description}>Web Development</span>
            <span className={style.icon}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                height="20"
                alt="figma logo"
                title="figma logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="20"
                alt="html5 logo"
                title="html5 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="20"
                alt="css3 logo"
                title="css3 logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height="20"
                alt="react logo"
                title="react logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                height="20"
                alt="typescript logo"
                title="typescript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                height="20"
                alt="redux logo"
                title="redux logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
                height="20"
                alt="eslint logo"
                title="eslint logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="20"
                alt="git logo"
                title="git logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="20"
                alt="github logo"
                title="github logo"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
