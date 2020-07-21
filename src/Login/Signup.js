import React from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

class Signup extends React.Component {

    state = { location: ""}

    handleChange(e){
        debugger
        this.setState({ location: e.target.value })
        
    }

    handleSubmit =(e) => {
        e.preventDefault()
        fetch('http://localhost:3001/user', {
            method:"POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
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
            if (data.token) {
                localStorage.setItem('token', data.token)
                this.props.setUser(data)
                return data.status
            }
            return console.log(data)
        })
    }

   

    render() {
        return (
                <Form className="signup-form" onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid required label="Email" placeholder="abc@def.com" 
                        onChange={this.handleChange} value={this.state.email}/>  
                    <Form.Input fluid required label="Password" placeholder="password" 
                        onChange={this.handleChange} value={this.state.password}/>
                    <Form.Input fluid required label="Nickname" placeholder="Ocean" 
                        onChange={this.handleChange} value={this.state.nickname}/>     
                    <Form.Select fluid required label="Location" options={options} placeholder="Location" />       
                </Form.Group>                 
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default Signup