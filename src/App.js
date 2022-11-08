import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Context from './components/Context/Context';
import Header from './components/Header/Header';

function App() {
  const[mode,setMode]= useState('light');
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#ffff';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#041628';

    }
  }
  return (
    <div className="App">
      <Header title="Title"  mode={mode} toggleMode={toggleMode}></Header>
      <Context heading="Enter Text Below" mode={mode}></Context>
      <About></About>
    </div>
  );
}

export default App;
