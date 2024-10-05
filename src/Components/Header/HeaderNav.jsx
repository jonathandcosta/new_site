import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './HeaderNav.module.css';

function MainHeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();
  React.useEffect(() => {
    setIsOpen(true);
  }, [pathname]);

  return (
    <header>
      <nav>
        <button className={style.buttonMobile} onClick={toggleMenu}></button>
        <ul
          className={`${isOpen ? style.navMobile : style.nav} ${
            isOpen && style.nav
          }`}
        >
          <NavLink to="/">About</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/portifolio">Portifólio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeaderNav;
