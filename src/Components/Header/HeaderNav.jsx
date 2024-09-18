import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderNav.module.css';

const MainHeaderNav = () => {
  return (
    <div>
      <ul className={style.nav}>
        <NavLink to="/">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/portifolio">Portifólio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
};

export default MainHeaderNav;
