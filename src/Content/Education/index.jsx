import React from 'react';
import Educa from '../../Assests/icons/education.svg?react';
import style from '../Education/style.module.css';

const Education = () => {
  return (
    <section className="container">
      <div className={style.nomeclature}>
        <Educa />
        <p className="subtitle">Education</p>
      </div>
      <div className={style.box}>
        <ul>
          <li>
            <p className="name">Frontend Engineer</p>
            <p className={style.date}>2022-2024</p>
            <p className={`${style.align} description`}>
              As a Front-End engineer, I am responsible for developing and
              implementing the interface of applications and websites, ensuring
              direct user interaction with the product. To this end, I am
              proficient in languages ​​such as HTML, CSS and JavaScript, which
              are essential for structuring, styling and adding interactivity to
              pages. In addition to these, I use frameworks such as React and
              VueJS that optimize development, allowing the creation of dynamic
              and efficient interfaces.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p className="name">Bachelor of Computer Science</p>
            <p className={style.date}>2021-2025</p>
            <p className={`${style.align} description`}>
              With this training, I was able to improve my knowledge in the
              areas of programming, data structures, algorithms, computer
              networks, databases and operating systems. This course also covers
              advanced topics such as artificial intelligence, information
              security and computer graphics. In addition to developing
              technical skills, critical thinking and problem-solving, it
              prepares students to work in various areas of technology and
              innovation.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p className="name">FullStack Developer</p>
            <p className={style.date}>2020-2021</p>
            <p className={`${style.align} description`}>
              In this Fullstack development course, I learned all the steps to
              create web applications on both the front-end and back-end. On the
              front-end, I learned languages ​​such as HTML, CSS, and
              JavaScript, as well as frameworks such as React and VueJS, to
              build interactive and responsive interfaces. On the back-end, the
              focus is on languages ​​such as Node.js, Python, as well as
              databases with MySQL and Docker, allowing the development of
              servers, APIs, and data management. With this training, the
              Fullstack developer is able to work on all layers of a web
              application, from the visual interface to the logic and data
              storage.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
