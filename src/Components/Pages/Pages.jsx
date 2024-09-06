import React from 'react';
import style from './Pages.module.css';
import Header from '../Header/Header';

const Main = () => {
  return (
    <>
      <div>
        <section className={style.page}>
          <Header />
        </section>
      </div>
    </>
  );
};

export default Main;
