import React from 'react';

import './App.css';

import NavBar from "./Navbar/NavBar"
import LoginContainer from "./Login/LoginContainer"
import PostContainer from './Post/PostContainer';
import PostForm from './PostForm'
import Filters from './Filters'

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      currentUser: null,
      posts: [],
      searchText: "",
      locationIds: [],
      filters: {
        locations: "all"
      }
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
      let sortedPosts = this.sortPostsByDate(data)
      this.setState({ posts: sortedPosts})
    })
  }

  changeSearch = (e) => {
    let searchText = e.target.value.toLowerCase()
    this.setState({ searchText: searchText })
  }
 
  searchFilterPost = () => {
    let {posts, searchText} = this.state
    return posts.filter(post => post.title.toLowerCase().includes(searchText))
  }

  addPost = (post) => {
    let newPost = [post, ...this.state.posts]
    this.setState({posts: newPost})
  }

  changeFilterType = (e) => {
    let type = e.target.value;
    this.setState({ filters: { locations: type } });
    let url = "http://localhost:3000/posts"
    if (type !== "all") {url += `?type=${type}`}
    fetch(url, {
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }})
    .then(r => r.json())
    .then(data => {
      console.log(data)
      let sortedPosts = this.sortPostsByDate(data)
      this.setState({ posts: sortedPosts})
    })
  }

  sortPostsByDate = (array) => {
   return array.sort( (a, b) => new Date(b.date) - new Date(a.date) ) 
  }


  render(){
    // let searchFilteredPosts = this.searchFilterPost()
    // let sortedPosts = this.sortedPostsByDate(this.state.posts) 

    return (
      <div className="App">
        <NavBar currentUser={!!this.state.currentUser} setUser={this.setUser} 
        removeUser={this.removeUser} changeSearch={this.changeSearch}  />
        <LoginContainer setUser={this.setUser} locationIds={this.state.locationIds}/>
        <PostContainer posts={this.searchFilterPost()}/>
        <Filters changeType={this.changeFilterType} locationIds={this.state.locationIds} />
        <PostForm addPost={this.addPost} currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
