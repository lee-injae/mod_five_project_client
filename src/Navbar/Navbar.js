import React, { Component } from "react"
import { Link } from 'react-router-dom'

import Logo from "../Logo.png"
import Search from './Search'
import LoginContainer from './Login/LoginContainer'
import PostForm from "./PostForm"

import { Form, Modal, Icon, Button } from 'semantic-ui-react'


class NavBar extends Component {

    logout = () => {
        console.log('logging out')
        localStorage.removeItem('token')
        this.props.removeUser()
    }

    render(){
        console.log(this.props)
        return (
            <div className="ui small menu">
                <div className="header item">
                    <Link to='/'>
                        <img style={{height: '4rem', width: '5rem'}} src={Logo} alt='logo'/>
                    </Link>      
                </div>
                <div className="item">
                    <Search changeSearch={this.props.changeSearch} />
                </div>
                <div className="right item">
                   <Modal trigger={<Button icon><Icon name='plus' /></Button>}>
                        <Modal.Content>
                            <PostForm addPost={this.props.addPost} 
                            currentUser={this.props.currentUser} />
                        </Modal.Content>
                   </Modal>
                </div>
                <div className="right menu">
                { this.props.isLogged ? 
                    (<div className="ui fluid two item menu" >
                    <p className="item">
                        {/* <Link to='/user'> */}
                            <div className="ui big label">
                                {this.props.userInfo.nickname}
                            </div> 
                        {/* </Link> */}
                    </p>
                    <p className="item">
                        <button className="ui button" onClick={this.logout}>
                            Log out
                        </button>
                    </p>
                    </div>) 
                :  
                    <LoginContainer 
                        setUser={this.props.setUser} 
                        locationIds={this.props.locationIds} 
                    />
                }
                </div>
            </div>
       )
    }
 }

export default NavBar