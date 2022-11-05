import React from 'react';
import './App.css';
import Context from './componets/Context/Context';
import Header from './componets/Header/Header';

function App() {
  return (
    <div className="App">
      <Header  about="About Us"></Header>
      <Context heading="Enter Text Below"></Context>
    </div>
  );
}

export default App;
