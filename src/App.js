import React from 'react';

import { Route, Switch } from 'react-router-dom'

import './App.css';

import NavBar from "./Navbar/NavBar"
import PostContainer from './Post/PostContainer';
import PostDetail from './Post/PostDetail'

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      currentUser: null,
      posts: [],
      searchText: "",
      locationIds: [],
      selectedPost: null,
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
    let searchTextByUser = e.target.value.toLowerCase()
    this.setState({ searchText: searchTextByUser })
  }
 
  searchFilterPost = () => {
    let {posts, searchText} = this.state
    return posts.filter(post => post.title.toLowerCase().includes(searchText))
  }

  addPost = (post) => {
    let newPost = [post, ...this.state.posts]
    this.setState({ posts: newPost })
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
        <NavBar 
          isLogged={!!this.state.currentUser} 
          userInfo={this.state.currentUser} 
          removeUser={this.removeUser}
          changeSearch={this.changeSearch} 
          setUser={this.setUser} 
          locationIds={this.state.locationIds}
          addPost={this.addPost} 
          currentUser={this.state.currentUser} 
        />
        <Switch>
        <Route path="/posts/:id" render={(routerProps) => {     
            let selectedPostId = routerProps.match.params.id
            let found = this.state.posts.find(p => p.id == selectedPostId)
              return <PostDetail postObj={found} /> 
          }}/>

          <Route exact path="/posts" render={() =>  
            <PostContainer 
            posts={this.searchFilterPost()} 
            locationIds={this.state.locationIds}
            changeFilterType={this.changeFilterType}
          />}/>
          <Route exact path="/" render={() =>  
            <PostContainer 
            posts={this.searchFilterPost()} 
            locationIds={this.state.locationIds}
            changeFilterType={this.changeFilterType}
          />}/>
        </Switch>
      </div>
    );
  }
}


export default App;

//  {/* <Route exact={true} path="/posts/:id" render={(routerProps) => {
//           let selectedPostId = routerProps.match.params.id 
//           let found = this.state.posts.find(p => p.id === selectedPostId) 
//           return <PostCardShow />
//         }}/>  
