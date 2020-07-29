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
        // debugger
        let formObj = this.state.form 
        formObj[e.target.name] = e.target.value
        this.setState({ form: formObj }) 
    }

    handleDropdownChange = (e,data) => {
        // debugger
        let formObj = this.state.form
        formObj[data.name] = data.value
        this.setState({ form: formObj})
    }

    handleSignupSubmit = (e) => {
        const {email, password, nickname, location_id} = this.state.form
        e.preventDefault()
        fetch('http://localhost:3000//api/v1/users', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', 
            },
            body: JSON.stringify({
                email: email,
                password: password,
                nickname: nickname,
                location_id: location_id
            })
        })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem('token', data.jwt)
            this.setState({ form: {} })
            console.log(data)
        })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/login', {
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
            if (data.jwt){
                localStorage.setItem('token', data.jwt)
                this.props.setUser(data)
                return data.status
            }
            return console.log(data)
        })
    }

    toggleForm = () => {
        this.setState({showSignup: !this.state.showSignup})
    }

    render(){
        // const { showSignup, showLogin } = this.state
        // console.log(this.props.locationIds)
        return(
            <div className="login-container">
                <div className='login-toggle-bar'>
                    <div className='login-tab' onClick={this.toggleForm}>Sign up</div>
                    <div className='login-tab' onClick={this.toggleForm}>Log in</div>
                </div>
                
                {this.state.showSignup ? <Signup handleSubmit={this.handleSignupSubmit} handleChange={this.handleChange}
                form={this.state.form} handleDropdownChange={this.handleDropdownChange} locationIds={this.props.locationIds} /> 
                : <Login handleSubmit={this.handleLoginSubmit} handleChange={this.handleChange}
                form={this.state.form} />  
                }
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
