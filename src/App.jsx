import React from 'react';
import './App.css';
import Main from './Content/Main';
import Content from './Content/Content';

const App = () => {
  return (
    <>
      <div className="main">
        <Content />
        <Main />
      </div>
    </>
  );
};

export default App;
