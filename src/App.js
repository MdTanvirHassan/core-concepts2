import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Alert from './components/Alert/Alert';
import Context from './components/Context/Context';
import Header from './components/Header/Header';

function App() {
  const[mode,setMode]= useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#ffff';
      showAlert("lightMode is Enable","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#041628';
      showAlert("darkMode is Enable","success");
    }
  }

  
  

  return (
    <div className="App">
      <Header title="Title"  mode={mode} toggleMode={toggleMode}></Header>
      <Alert alert={alert}></Alert>
      <Context showAlert={showAlert} heading="Enter Text Below" mode={mode}></Context>
      <About></About>
    </div>
  );
}

export default App;
