import { useState, useEffect } from 'react';
import styles from './style.module.css';

import projectsData from '../../data.json'; // Importando os dados do JSON

const CardProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section>
      <div className={styles.fullCards}>
        {projects.map((project) => (
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
