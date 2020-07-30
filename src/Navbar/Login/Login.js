import React from 'react'
import { Form } from 'semantic-ui-react'


const Login = (props) => {
        return (
            <div>
                <h4>Log in</h4>
                <Form onSubmit={props.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input fluid label='Email' name="email" placeholder='abc@def.com'
                        onChange={props.handleChange} value={props.form.email} />
                        <Form.Input fluid label='Password' type="password" name="password" 
                        onChange={props.handleChange} value={props.form.password} />                        
                    </Form.Group>
                    <Form.Button>Log in</Form.Button>
                </Form>
            </div>
        )
    }



export default Login