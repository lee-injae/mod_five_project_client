import React from 'react';


import './App.css';

import NavBar from "./Navbar/NavBar"
// import Post from "./Post/PostContainer"
import LoginContainer from "./Login/LoginContainer"
import PostContainer from './Post/PostContainer';

// import LoginContainer from './Login/LoginContainer';

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      currentUser: null,
      posts: [],
      searchText: "",
      locationIds: []
    }
  }

  setUser = (user) => {
    this.setState( {currentUser: user} )
    this.getPosts()
  }

  removeUser = () => {
    this.setState({currentUser: null})
    this.getPosts()
  }

  componentDidMount(){
    this.getCurrentUser()
    this.getPosts()
    this.getLocationId()
  }

  getLocationId(){
    fetch("http://localhost:3000/locations")
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({ locationIds: data})
    })
  }

  getCurrentUser =() => {
    if (localStorage.getItem('token')){
      fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          'Content-Type':'applicatio/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        } 
      })
      .then(r => r.json())
      .then(data => {
        this.setState({ currentUser: data})
      })
    }
  }

  getPosts = () => {
    fetch("http://localhost:3000/posts", {
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }})
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({ posts: data})
    })
  }

 
  render(){
    return (
      <div className="App">
        <NavBar currentUser={!!this.state.currentUser} setUser={this.setUser} 
        removeUser={this.removeUser}  />
        <LoginContainer setUser={this.setUser} locationIds={this.state.locationIds}/>
        <PostContainer posts={this.state.posts}/>
        
      </div>
    );
  }
}

export default App;
