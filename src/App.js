import React from 'react';
// import logo from './vegetable.svg';
import './App.css';
import './vegetable.svg'

import Navbar from "./Navbar/Navbar"
import Login from "./Login/LoginContainer"
import LoginContainer from './Login/LoginContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginContainer />
    </div>
  );
}

export default App;
