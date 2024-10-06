import React from 'react';
import Experi from '../../Assests/icons/book.svg?react';
import style from '../Content/Experience.module.css';

const Experience = () => {
  return (
    <section className="container">
      <div className={style.nomeclature}>
        <Experi />
        <p className="subtitle">Experience</p>
      </div>
      <div className={style.box}>
        <ul>
          <li>
            <p className="name">E-commerce Supervision</p>
            <p className={style.date}>Brazz Brazz Papelaria</p>
            <p className={style.date}>mai de 2024</p>
            <p className={`${style.align} description`}>
              With extensive experience in leadership and innovation, I managed
              multidisciplinary Marketing, Registration and Customer Service
              teams, ensuring the integration and efficient execution of
              projects. In the field of technological innovation, I led the
              implementation of new tools, leading integration projects between
              website, e-commerce and ERP, using agile methodologies to optimize
              processes.
              <br />
              <br />
              As a frontend developer, I restructured the website and improved
              the user experience through optimized layouts and new features,
              such as SEO improvements and carrier configuration in VTEX IO. In
              addition, I managed and optimized Google tools, such as Tag
              Manager and Analytics, boosting online performance. These actions
              resulted in a 55% increase in e-commerce revenue.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p className="name">Frontend Development Assistant - VTEX</p>
            <p className={style.date}>Comercial Maranguape</p>
            <p className={style.date}>out de 2022- mar de 2024</p>
            <p className={`${style.align} description`}>
              I started as a development assistant, but due to my experience in
              leading strategic projects, I led the implementation of PIX and
              new integrations, and was promoted to take on the role of
              supervisor. Since then, I have used agile methodologies such as
              Scrum to ensure deliveries aligned with the company's objectives.
              I managed Marketing, Development, Registration and Customer
              Service teams, promoting a collaborative and efficient
              environment. I coordinated the integration of e-commerce
              technologies, such as payment platforms, CRM and marketplaces,
              optimizing the user experience and maximizing sales.
              <br />
              <br />
              I used advanced data analysis techniques, such as data mining and
              predictive analysis, to identify trends and opportunities. I
              performed detailed analyses of sales performance, implementing
              strategies that increased conversion and average ticket. I also
              evaluated the ROI of digital campaigns, adjusting strategies based
              on metrics such as CAC and LTV.
              <br />
              <br />
              In the marketing area, I managed paid traffic campaigns on Google
              Ads and Facebook Ads, optimizing investments to maximize returns.
              I performed A/B tests to improve design and copywriting elements,
              increasing conversion rates. Additionally, I implemented design
              and usability improvements to increase website conversion. I
              developed custom reports and dashboards with tools such as
              Microsoft PowerBI and Targit, providing a clear view of data and
              performance metrics.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p className="name">Franchise and Sales Manager</p>
            <p className={style.date}>Royal Prestige</p>
            <p className={style.date}>out de 2014- mar de 2020</p>
            <p className={`${style.align} description`}>
              I started this project as a door-to-door salesman and, as my
              professional development progressed, I received an offer to
              supervise and later manage 5 franchises spread throughout Brazil.
              In São Paulo, I developed a new franchise, developing and creating
              training courses, monitoring franchise indicators, creating
              methods for prospecting new clients and salespeople, developing
              advanced sales techniques for specific customers, and innovating
              the design and directional program for referrals.
              <br />
              <br />
              Under my direct supervision, I led sales teams involving more than
              50 salespeople, worked on creating daily, weekly and monthly
              goals, individual monitoring, monitoring team indicators, and
              providing training focused on product presentation, sales,
              advanced negotiation techniques, recruitment, motivational
              lectures and financial management.
              <br />
              <br />
              Throughout my work, I remained in direct contact with our client,
              presenting and selling the product, directly recruiting new
              salespeople, and conducting marketing and networking activities. I
              contributed directly to the joint revenue of approximately US$250
              million/year.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
