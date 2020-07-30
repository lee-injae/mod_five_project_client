import React from 'react'

import Signup from "./Signup"
import Login from "./Login"
import { Modal } from 'semantic-ui-react'

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

    handleDropdownChange = (e,data) => {
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
            this.setState({ form: {} })
            if (data.jwt) {
            localStorage.setItem('token', data.jwt)
            this.props.setUser(data)
            return data.status
            }
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
            console.log(data)
        })
    }

    render(){
        return(
            <div className="login-container">
                <div className='item'>
                    <Modal trigger={<div className='ui button'>Sign up</div>}>
                        <Modal.Header>Sign up</Modal.Header>
                        <Modal.Content>
                            <Signup handleSubmit={this.handleSignupSubmit} 
                                    handleChange={this.handleChange}
                                    form={this.state.form} 
                                    handleDropdownChange={this.handleDropdownChange} 
                                    locationIds={this.props.locationIds} />
                        </Modal.Content>
                    </Modal>
                    <Modal trigger={<div className='ui button'>Log in</div>}>
                        <Modal.Header>Log in</Modal.Header>
                            <Modal.Content>
                                <Login handleSubmit={this.handleLoginSubmit} 
                                       handleChange={this.handleChange}
                                       form={this.state.form} />
                            </Modal.Content>
                    </Modal>
                </div>
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
