import { useState, useEffect } from 'react';
import styles from './style.module.css';

import projectsData from '../../data.json'; // Importando os dados do JSON

const CardProjects = () => {
  // Filtra os projetos com base na descrição
  const [filter, setFilter] = useState('All');

  const filterProject = projectsData.filter((project) =>
    filter === 'All' ? true : project.description === filter,
  );

  return (
    <section>
      <div className={styles.filterButtons}>
        <button className={styles.button} onClick={() => setFilter('All')}>
          All
        </button>
        <button
          className={styles.button}
          onClick={() => setFilter('E-commerce Development')}
        >
          Ecommerce
        </button>
        <button
          className={styles.button}
          onClick={() => setFilter('LandPage Development')}
        >
          LandPage
        </button>
        <button
          className={styles.button}
          onClick={() => setFilter('Social Midia Development')}
        >
          Midia
        </button>
        <button
          className={styles.button}
          onClick={() => setFilter('Store Development')}
        >
          Store
        </button>
      </div>
      <div className={styles.fullCards}>
        {filterProject.map((project) => (
          <div key={project.id}>
            <div className={styles.card}>
              <img
                className={styles.image}
                src={project.image}
                alt={project.title}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayName}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.subTitles}>
              <span className="name">{project.title}</span>
              <span className={styles.description}>{project.description}</span>
              <span className={styles.icon}>
                {project.technologies.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    height="20"
                    alt="tech logo"
                    title="tech logo"
                  />
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardProjects;
