import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <>
      <div className="main">
        <Card />
        <Main />
      </div>
    </>
  );
};

export default App;
