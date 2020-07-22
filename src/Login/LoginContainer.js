import React from 'react'

import Signup from "./Signup"
import Login from "./Login"

import "./LoginContainer.css"

class LoginContainer extends React.Component {

    constructor(){
        super()
        this.state= {
            form: {},
            showSignup: false,
            showLogin: false,
        }
    }

    handleChange = (e) => {
        let formObj = this.state.form 
        formObj[e.target.name] = e.target.value
        this.setState({ form: formObj }) 
    }

    handleSignupSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/user', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', 
            },
            body: JSON.stringify({
                email: this.state.form.email,
                password: this.state.form.password,
                nickname: this.state.form.nickname,
                location: this.state.form.location
            })
        })
        .then(r => r.json())
        .then(data => {
            this.setState({ form: {} })
            console.log(data)
        })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/user', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', 
            },
            body: JSON.stringify({
                email: this.state.form.email,
                password: this.state.form.password,
            })
        })
        .then(r => r.json())
        .then(data => {
            this.setState({ form: {} })
            console.log(data)
        })
    }

    render(){
        // const { showSignup, showLogin } = this.state

        return(
            <div className="login-container">
                <Signup handleSubmit={this.handleSignupSubmit} handleChange={this.handleChange}
                form={this.state.form}  />
                <Login handleSubmit={this.handleLoginSubmit} handleChange={this.handleChange}
                form={this.state.form} />
            </div>
            );
        }
}

export default LoginContainer


//     onOpenSignup = () => {
//         this.setState({ showSignup: true })
//     }

//     onOpenLogin = () => {
//         this.setState({ showLogin: true })
//     }

//     onCloseSignup =() => {
//         this.setState({ showSignup: false })
//     }

//     onCloseLogin =() => {
//         this.setState({ showLogin: false })
//     }
