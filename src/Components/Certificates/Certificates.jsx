import React from 'react';
import Check from '../../Assests/icons/check1.svg?react';
import Eng from '../../Assests/img/certificados/certificado_eng_front.jpg';
import Ia from '../../Assests/img/certificados/certificado_ia.jpg';
import Figma from '../../Assests/img/certificados/certificado_figma.jpg';
import UiAvan from '../../Assests/img/certificados/certificado_ui_avan.jpg';
import style from '../../Components/Certificates/Certificates.module.css';

const Certificates = () => {
  return (
    <section className="container">
      <h1 className="subtitle">Frontend Development</h1>
      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">Frontend Engineer</p>
          <p className="">EBAC -Escola Britanica</p>
          <a href="https://static.lms.ebaconline.com.br/certs/course/54d1cfc9-3e75-4df2-9af7-70fc81d099b9/original.pdf?1714776467352">
            Issued on May 24
            <Check />
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

      <h1 className="subtitle">UI and UX Design</h1>
      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">Advanced Ui Design</p>
          <p className="">Origamid</p>
          <a href="https://static.lms.ebaconline.com.br/certs/course/1ba56936-19a7-4fcf-8f5b-0af341c7d96c/original.pdf?1715458483635">
            Issued on Mar 23
            <Check />
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

      <h1 className="subtitle">Tools</h1>
      <ul className={style.cards}>
        <div className={style.content}>
          <p className="name">Artificial Intelligence</p>
          <p className="">EBAC -Escola Britanica</p>
          <a href="https://static.lms.ebaconline.com.br/certs/course/1ba56936-19a7-4fcf-8f5b-0af341c7d96c/original.pdf?1715458483635">
            Issued on May 24
            <Check />
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
          <a href="https://static.lms.ebaconline.com.br/certs/e18d598e-b516-4be3-94f6-ccf11d4e929b.pdf">
            Issued on Nov 22
            <Check />
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
