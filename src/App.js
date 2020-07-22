import React from 'react';


import './App.css';

import NavBar from "./Navbar/NavBar"
// import LoginContainer from './Login/LoginContainer';

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      currentUser: null,
      
    }
  }

 
  render(){
    return (
      <div className="App">
        <NavBar isLogged={this.state.currentUser} />
        {/* <LoginContainer /> */}
      </div>
    );
  }
}

export default App;
