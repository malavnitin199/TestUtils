
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,Setalert] = useState(null);
  const [modeR, setModeR] = useState('light');

  const showAlert = (message,type)=>{
    Setalert({
     msg : message, 
     type : type
    })
    setTimeout(() =>{
      Setalert(null);
    },1000)
  }
  const colourMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#6c757d';
      showAlert("Dark mode has been enabled","success")
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")

    }
  }
  const colourModeR = () => {
    if (mode === 'light') {
      setMode('green');
      document.body.style.backgroundColor ='green';
      showAlert("Green mode has been enabled","success")
      //  setInterval(()=>{
      //   document.title = "texutils is amazing"
      //  },2000);
      //  setInterval(()=>{
      //   document.title= "insatll texutill -App"
      //  },1500);      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")

    }
  }
  
  
  return (
    <>
    <Navbar title = "Textutils" aboutText="About Utils" mode={mode} colourMode = {colourMode} colourModeR={colourModeR} modeR={modeR}/>
    <Alert alert = {alert}/>
    <div className = "container my-3">
    <TextForm heading = "Enter the text to analyze below" mode={mode}/>
   </div>
  </>
    
    
  );
}

export default App;
 