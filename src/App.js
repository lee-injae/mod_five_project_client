import React from 'react';


import './App.css';

import NavBar from "./Navbar/NavBar"
import Post from "./Post/PostContainer"

// import LoginContainer from './Login/LoginContainer';

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      currentUser: null,
      post: [],
      searchText: ""
    }
  }

  setUser = (user) => {
    this.setState({currentUser: user})
  }

  componentDidMount(){
    if (localStorage.getItem('jwt')){
      fetch("http://localhost:3000/api/v1/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        } 
      })
      .then(r => r.json())
      .then(data => {
        this.setState({ currentUser: data})
      })
    }


    this.getPost()
  }

  getPost = () => {
    fetch("http://localhost:3000/post")
    .then(r => r.json())
    .then(postDataArray => {
      console.log(postDataArray)
      this.setState({ post: postDataArray})
    })
  }

 
  render(){
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} />
        <Post postObjArray={this.state.post}/>
        {/* <LoginContainer /> */}
      </div>
    );
  }
}

export default App;
