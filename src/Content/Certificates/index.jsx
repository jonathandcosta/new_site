import React from 'react';
import Open from '../../Assests/icons/open_file.svg?react';
import Eng from '../../Assests/img/certificados/certificado_eng_front.jpg';
import Ia from '../../Assests/img/certificados/certificado_ia.jpg';
import Figma from '../../Assests/img/certificados/certificado_figma.jpg';
import UiAvan from '../../Assests/img/certificados/certificado_ui_avan.jpg';
import UxHeur from '../../Assests/img/certificados/certificado_ux_heuristic.jpg';
import Js from '../../Assests/img/certificados/certificado_js_es6.jpg';
import Grid from '../../Assests/img/certificados/certificado_css_grid.jpg';
import Flex from '../../Assests/img/certificados/certificado_css_flexbox.jpg';
import Html from '../../Assests/img/certificados/certificado_html.jpg';
import ReactJs from '../../Assests/img/certificados/certificado_react.jpg';
import style from '../../Content/Certificates/style.module.css';

const Certificates = () => {
  return (
    <section className="container">
      <h1 className={`${'subtitle'} ${style.titulo}`}>Frontend Development</h1>

      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">ReactJS</p>
          <p className="">Origamid</p>
          <a
            href="https://www.origamid.com/certificate/bc892580"
            target="_blank"
          >
            Issued on Jan 25
            <Open />
          </a>
          <p className="description">
            I completed a 36-hour ReactJS course, where I acquired fundamental
            and advanced skills for developing interactive and dynamic
            interfaces. In the final project, I created a social network for
            dogs, applying concepts such as state management with Hooks and
            integration with APIs, demonstrating the ability to develop modern
            and scalable applications.
          </p>
        </div>
        <img src={ReactJs} alt="certificado" />
      </ul>

      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">Frontend Engineer</p>
          <p className="">EBAC -Escola Britanica</p>
          <a
            href="https://static.lms.ebaconline.com.br/certs/course/54d1cfc9-3e75-4df2-9af7-70fc81d099b9/original.pdf?1714776467352"
            target="_blank"
          >
            Issued on May 24
            <Open />
          </a>
          <p className="description">
            I am a trained Frontend Engineer with solid experience in developing
            efficient and responsive interfaces. During my training, I learned
            to master technologies such as HTML5, CSS3, JavaScript, TypeScript,
            React.js, Vue.js, jQuery, Redux, SASS, LESS, Tailwind, Figma, Git,
            and agile methodologies, ensuring high performance and usability. I
            am ready to apply these skills to large projects and contribute to
            the success of innovative companies.
          </p>
        </div>
        <img src={Eng} alt="certificado" />
      </ul>

      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">JavaScript ES6</p>
          <p className="">Origamid</p>
          <a
            href="https://www.origamid.com/certificate/f33788a8/"
            target="_blank"
          >
            Issued on April 22
            <Open />
          </a>
          <p className="description">
            With a degree in JavaScript ES6, I acquired advanced knowledge about
            the language's modern features, such as arrow functions,
            destructuring, promises, modules and classes. This expertise allows
            me to develop more efficient, clean and scalable code, improving the
            performance and maintenance of frontend projects.
          </p>
        </div>
        <img src={Js} alt="certificado" />
      </ul>

      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">CSS Grid Layout</p>
          <p className="">Origamid</p>
          <a
            href="https://www.origamid.com/certificate/b2056e46/"
            target="_blank"
          >
            Issued on April 22
            <Open />
          </a>
          <p className="description">
            With a degree in JavaScript ES6, I acquired advanced knowledge about
            the language's modern features, such as arrow functions,
            destructuring, promises, modules and classes. This expertise allows
            me to develop more efficient, clean and scalable code, improving the
            performance and maintenance of frontend projects.
          </p>
        </div>
        <img src={Grid} alt="certificado" />
      </ul>

      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">CSS Flexbox</p>
          <p className="">Origamid</p>
          <a href="https://origamid.com/certificate/b60e4b74" target="_blank">
            Issued on Jan 22
            <Open />
          </a>
          <p className="description">
            With a degree in CSS Flexbox, I learned to master flexible layout to
            create responsive and optimized interfaces. Flexbox allows you to
            organize and align elements efficiently, ensuring an adaptive and
            modern design across different resolutions and devices. This skill
            enhances the visual structuring of frontend projects, improving both
            usability and aesthetics.
          </p>
        </div>
        <img src={Flex} alt="certificado" />
      </ul>

      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">HTML and CSS fo Beginners</p>
          <p className="">Origamid</p>
          <a href="https://origamid.com/certificate/8d0b3b2a" target="_blank">
            Issued on Jan 22
            <Open />
          </a>
          <p className="description">
            After completing the HTML and CSS for Beginners course, I acquired a
            solid foundation in creating structures and styles for web pages. I
            understood the fundamentals of HTML to create semantic content and
            CSS to apply styles, ensuring that pages are visually appealing and
            functional. This training was essential for developing
            well-structured and responsive interfaces.
          </p>
        </div>
        <img src={Html} alt="certificado" />
      </ul>

      <h1 className={`${'subtitle'} ${style.titulo}`}>UI and UX Design</h1>
      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">Advanced UI Design</p>
          <p className="">Origamid</p>
          <a
            href="https://www.origamid.com/certificate/73ed514f"
            target="_blank"
          >
            Issued on Mar 23
            <Open />
          </a>
          <p className="description">
            With this degree in Advanced UI Design, I developed skills to create
            intuitive and visually appealing interfaces, always focusing on the
            user experience. I learned to apply principles of usability,
            accessibility and responsive design, ensuring that each project has
            a functional and engaging interface, capable of meeting user
            expectations and business needs.
          </p>
        </div>
        <img src={UiAvan} alt="certificado" />
      </ul>

      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">UX Desing Heuristics</p>
          <p className="">Origamid</p>
          <a href="https://origamid.com/certificate/be58630a" target="_blank">
            Issued on Mar 23
            <Open />
          </a>
          <p className="description">
            I learned how to apply usability principles to improve the user
            experience in digital interfaces. Using heuristics such as feedback,
            consistency and control, I developed solutions that facilitate
            navigation, optimize interaction and ensure that the user has an
            efficient and intuitive experience.
          </p>
        </div>
        <img src={UxHeur} alt="certificado" />
      </ul>

      <h1 className={`${'subtitle'} ${style.titulo}`}>Tools</h1>
      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">Artificial Intelligence</p>
          <p className="">EBAC -Escola Britanica</p>
          <a
            href="https://static.lms.ebaconline.com.br/certs/course/1ba56936-19a7-4fcf-8f5b-0af341c7d96c/original.pdf?1715458483635"
            target="_blank"
          >
            Issued on May 24
            <Open />
          </a>
          <p className="description">
            With a degree in Artificial Intelligence, I developed skills to
            apply innovative techniques from this area in my work as a Frontend
            Developer. By combining AI with technologies such as HTML5, CSS3,
            JavaScript and React.js, I can create smarter, more optimized
            interfaces focused on the user experience. This AI integration
            allows me to offer solutions that not only improve project
            performance, but also bring more strategic and effective results for
            businesses.
          </p>
        </div>
        <img src={Ia} alt="certificado" />
      </ul>
      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">FIGMA</p>
          <p className="">EBAC -Escola Britanica</p>
          <a
            href="https://static.lms.ebaconline.com.br/certs/e18d598e-b516-4be3-94f6-ccf11d4e929b.pdf"
            target="_blank"
          >
            Issued on Nov 22
            <Open />
          </a>
          <p className="description">
            I have a degree in Figma, an essential tool for collaborative design
            and interface prototyping. During my training, I learned how to use
            its main features, such as wireframing, interactive prototypes,
            responsive design and management of reusable components. Figma
            allows for an integrated workflow between design and development,
            facilitating real-time collaboration with teams, which results in
            more optimized and consistent interfaces for frontend projects.
          </p>
        </div>
        <img src={Figma} alt="certificado" />
      </ul>
    </section>
  );
};

export default Certificates;
