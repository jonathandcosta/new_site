import React from 'react';
import style from './Projects.module.css';
import bikcraft from '../../Assests/projetos/bikcraft.png';
import beautySalon from '../../Assests/projetos/beautysalon.png';
import fineze from '../../Assests/projetos/fineze.png';
import efood from '../../Assests/projetos/efood.png';
import menu from '../../Assests/projetos/menu.png';
import style_salão from '../../Assests/projetos/style_salão.png';

const Projects = () => {
  return (
    <section className="container">
      <div className={style.fullCard}>
        <div className={style.card}>
          <img src={bikcraft} alt="projeto bikcraft" />
          <a href="">
            <p className="name">Bikraft</p>
          </a>
          <p className="description">Web Development</p>
        </div>
        <div className={style.card}>
          <img src={beautySalon} alt="projeto bikcraft" />
          <a href="">
            <p className="name">BeautySalon</p>
          </a>
          <p className="description">Web Development</p>
        </div>
        <div className={style.card}>
          <img src={fineze} alt="projeto bikcraft" />
          <a href="">
            <p className="name">Fineze</p>
          </a>
          <p className="description">Web Development</p>
        </div>
        <div className={style.card}>
          <img src={efood} alt="projeto bikcraft" />
          <a href="">
            <p className="name">Efood</p>
          </a>
          <p className="description">Nome da aplicação</p>
        </div>
        <div className={style.card}>
          <img src={menu} alt="projeto bikcraft" />
          <a href="">
            <p className="name">Nome do projeto</p>
          </a>
          <p className="description">Nome da aplicação</p>
        </div>
        <div className={style.card}>
          <img src={style_salão} alt="projeto bikcraft" />
          <a href="">
            <p className="name">Nome do projeto</p>
          </a>
          <p className="description">Nome da aplicação</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
