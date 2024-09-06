import React from 'react';
import './App.css';
import Card from './Components/Side/SideCard';
import Page from './Components/Pages/Pages';

const App = () => {
  return (
    <>
      <div className="main">
        <Card />
        <Page />
      </div>
    </>
  );
};

export default App;
