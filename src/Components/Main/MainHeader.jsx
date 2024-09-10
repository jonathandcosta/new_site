import React from 'react';
import MainHeaderNav from './MainHeaderNav';
import style from '../Main/MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={style.header}>
      <h1 className="title">Título</h1>
      <MainHeaderNav />
    </header>
  );
};

export default MainHeader;
