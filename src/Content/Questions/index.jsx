import React, { useState } from 'react';
import style from './style.module.css';

const data = [
  {
    pergunta: 'What do you do?',
    resposta:
      'I am a frontend developer, I am responsible for creating and implementing the interface of websites and applications, ensuring that users can interact with the pages effectively and intuitively.',
  },
  {
    pergunta: 'What are the main technologies you use in the frontend?',
    resposta:
      'Core technologies include HTML, CSS, JavaScript, as well as frameworks like ReactJS, VueJS and libraries like jQuery, Tailwind CSS, and preprocessors like SASS and LESS.',
  },
  {
    pergunta: 'As a frontend developer, do you make websites?',
    resposta:
      'Yes, but my work goes far beyond that. My work involves creating modern, functional and responsive interfaces for websites and web applications, using technologies such as HTML, CSS and JavaScript. I also work with frameworks and libraries such as ReactJS, VueJS and many other tools to ensure the user has the best possible experience. In addition to coding, I also collaborate with designers, UX/UI and other teams to implement dynamic layouts, API integrations, performance improvements and ensuring that the website is accessible and optimized for different devices and browsers.',
  },
  {
    pergunta: 'What is the role of the frontend in website performance?',
    resposta:
      'The frontend developer optimizes the user experience by improving website performance, reducing loading time, implementing responsive design and adopting SEO techniques.',
  },
  {
    pergunta: 'How much does it cost to make a website?',
    resposta:
      'The cost of developing a website can vary greatly, depending on factors such as the type of website, its complexity, and the features required. For example, simple websites with static pages have a lower cost, while more robust projects, such as e-commerce sites, portals with complex integrations, or customized features, tend to be more expensive.',
  },
  {
    pergunta: 'What does responsive design mean?',
    resposta:
      'Responsive design refers to the ability of a website or application to adapt to different devices and screen sizes, such as mobile phones, tablets, and desktops, providing a consistent user experience.',
  },
  {
    pergunta: 'What is the difference between frontend and backend?',
    resposta:
      'The frontend handles the visible, interactive part of the website or application, while the backend manages the server, database, and business logic that runs behind the scenes.',
  },
  {
    pergunta:
      'As a front end developer, do you have knowledge of UX/UI techniques?',
    resposta:
      'Yes, having knowledge in UX/UI helps the frontend developer to create more user-friendly and efficient interfaces, improving the user experience on the website or application.',
  },
  {
    pergunta: 'What are the main challenges of a frontend developer?',
    resposta:
      'Key challenges include ensuring cross-browser compatibility, maintaining optimal interface performance, working with APIs, and developing accessible and scalable code.',
  },
  {
    pergunta: 'Do you perform code tests on the frontend before delivery?',
    resposta:
      'Frontend testing, such as unit testing with tools like Jest or Cypress, helps ensure that interface components and functionality work correctly and prevent future bugs.',
  },
  {
    pergunta: 'How does the frontend integrate with APIs?',
    resposta:
      'The frontend developer uses API calls to connect with data from the backend or third-party services, manipulating that data and displaying it in the interface for users.',
  },
];

const Questions = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="container">
      <div className={style.subtitle}>Frequently Asked Questions</div>
      <div className={style.accordion}>
        {data.map((item, i) => (
          <div className={style.item}>
            <div className={style.question} onClick={() => toggle(i)}>
              <p>{item.pergunta}</p>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div
              className={selected === i ? style.respostaShow : style.resposta}
            >
              {item.resposta}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
