import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeaderNav = () => {
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/Portifólio">Portifólio</NavLink>
      <NavLink to="/Blog">Blog</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </nav>
  );
};

export default MainHeaderNav;
