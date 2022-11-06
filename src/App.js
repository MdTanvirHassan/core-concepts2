import React from 'react';
import './App.css';
import Context from './components/Context/Context';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title="Title" about="About Us"></Header>
      <Context heading="Enter Text Below"></Context>
      
    </div>
  );
}

export default App;
