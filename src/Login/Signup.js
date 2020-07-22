import React from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'k', text: 'Kalorama', value: 'kalorama' },
    { key: 'd', text: 'Dupont Circle', value: 'dupont' },
    { key: 'a', text: 'Adams Morgan', value: 'adams morgan' },
    { key: 'w', text: 'Woodley Park', value: 'woodley park' },
    { key: 'u', text: 'U Street', value: 'u street' }
  ]

class Signup extends React.Component {
   
    render() {
        return (
            <div>
                <h4>Sign up</h4>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input fluid required label="Email" name="email" placeholder="abc@def.com" 
                            onChange={this.props.handleChange} value={this.props.form.email}/>  
                        <Form.Input fluid required label="Password" name="password" placeholder="password" 
                            onChange={this.props.handleChange} value={this.props.form.password}/>
                        <Form.Input fluid required label="Nickname" name="nickname" placeholder="nickname" 
                            onChange={this.props.handleChange} value={this.props.form.nickname}/>     
                        <Form.Select fluid required label="Location" name="" options={options} placeholder="Location" />       
                    </Form.Group>                 
                    <Form.Button>Sign up</Form.Button>
                </Form>
            </div>
        )
    }
}

export default Signup