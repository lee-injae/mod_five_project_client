import React, { Component } from "react"
import { Link } from 'react-router-dom'


import SearchContainer from './SearchContainer'
import LoginContainer from '../Login/LoginContainer'

import Logo from "../logo.svg"
import './Navbar.css'



class NavBar extends Component {

    constructor(){
        super()
        this.state= {
            nickname: "",
        }
    }

    logout = () => {
        console.log('logging out')
        localStorage.removeItem('token')
        this.props.removeUser()
    }

    render(){
        return (
            <div className="navbar">
                <div className="navbar-logo">
                    <Link to='/'><img style={{height: '3rem', width: '3rem'}} src={Logo} alt='logo'/></Link>      
                </div>
                <div className="search-form">
                    <SearchContainer />
                </div>
                { this.props.currentUser ? 
                    (<div className="navbar-avatar">
                    <p><Link to='/user'>Hi user</Link></p>
                    <p><button onClick={this.logout}>Log out</button></p>
                    </div>) 
                :  (<div>
                    <ul className="navbar-menu">
                        {/* <li><Link to='/login' component={LoginContainer}>Login</Link></li>
                        <li><Link to='/signup'>Signup</Link></li> */}
                    </ul> 
                </div>)}
            </div>
       )
    }
 }

export default NavBar