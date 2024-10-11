import React from 'react';
import MainHeaderNav from './HeaderNav';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/':
        setTitle('About');
        break;
      case '/resume':
        setTitle('Resume');
        break;
      case '/portifolio':
        setTitle('Portifólio');
        break;
      case '/blog':
        setTitle('Blog');
        break;
      case '/contact':
        setTitle('Contact');
        break;
      case '/certificates':
        setTitle('Certificates');
        break;
    }
  }, [location]);

  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <MainHeaderNav />
    </header>
  );
};

export default Header;
