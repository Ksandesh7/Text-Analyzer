// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import React, { useState } from 'react';
// import  Routes form 'react-router-dom'  
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//    Routes
// } from "react-router-dom";



// import {
//   BrowserRouter as Router,
//   Route,
//    Routes
// } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)  => {
    setAlert({
      msg : message,
      typ : type
    })
  }
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Alert alert="This is an Alert"/> */}

      <div className='container my-3'>
        <Router>
          < Routes>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
            <Route exact path="/about" element={ <About />}/>

          </ Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
