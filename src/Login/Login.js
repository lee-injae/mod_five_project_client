import React from 'react'
import { Form } from 'semantic-ui-react'


class Login extends React.Component {

    render(){
        return (
            <div>
                <h4>Log in</h4>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input fluid label='Email:' name="email" placeholder='abc@def.com'
                        onChange={this.props.handleChange} value={this.props.form.email} />
                        <Form.Input fluid label='Password:' name="password" placeholder='password'
                        onChange={this.props.handleChange} value={this.props.form.password} />                        
                    </Form.Group>
                    <Form.Button>Login</Form.Button>
                </Form>
            </div>
        )
    }
}


export default Login