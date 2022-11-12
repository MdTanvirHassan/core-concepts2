import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Alert from './components/Alert/Alert';
import Context from './components/Context/Context';
import Header from './components/Header/Header';

function App() {
  const[mode,setMode]= useState('light');
  const [alert,setAlert] = useState(null);
  
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#ffff';
      showAlert('LightMode is Enable','success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#041628';
      showAlert('DarkMode is Enable','success');
    }
  }

  
  const showAlert =(message, type)=>{
    setAlert({
      message:message,
      type:type
    });
  }

  return (
    <div className="App">
      <Header title="Title"  mode={mode} toggleMode={toggleMode}></Header>
      <Alert alert={alert}></Alert>
      <Context heading="Enter Text Below" mode={mode}></Context>
      <About></About>
    </div>
  );
}

export default App;
