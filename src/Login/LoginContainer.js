import React from 'react'

import Signup from "./Signup"
import Login from "./Login"

// // import Modal from "react-bootstrap/Modal"
// // import Button from "react-bootstrap/Button"

import "./LoginContainer.css"

class LoginContainer extends React.Component {

    constructor(){
        super()
        this.state= {
            nickname: "",
            showSignup: false,
            showLogin: false,
        }
    }

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


    handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/login', {
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
            if (data.token) {
                localStorage.setItem('token', data.token)
                this.props.setUser(data)
                return data.status
            }
            console.log(data)
        })
    }

    render(){
        const { showSignup, showLogin } = this.state

        return(
            <div className="login-container">
                <Signup />
                <Login />
            </div>
            );
        }
}

export default LoginContainer