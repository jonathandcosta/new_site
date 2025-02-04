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
        document.title = 'JDC | About';
        break;
      case '/resume':
        setTitle('Resume');
        document.title = 'JDC | Resume';
        break;
      case '/portifolio':
        setTitle('Portifolio');
        document.title = 'JDC | Portifolio';
        break;
      case '/contact':
        setTitle('Contact');
        document.title = 'JDC | Contact';
        break;
      case '/certificates':
        setTitle('Certificates');
        document.title = 'JDC | Certificates';
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
