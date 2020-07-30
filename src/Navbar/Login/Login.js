import React from 'react'
import { Form } from 'semantic-ui-react'


const Login = (props) => {
        return (
            <div>
                <Form onSubmit={props.handleSubmit}>
                    <Form.Input fluid width={4}
                        label='Email' 
                        name="email" 
                        placeholder='abc@def.com'
                        onChange={props.handleChange} 
                        value={props.form.email} 
                    />
                    <Form.Input fluid width={4}
                        label='Password' 
                        type="password" 
                        name="password" 
                        onChange={props.handleChange} 
                        value={props.form.password} 
                    />                        
                    <Form.Button>Log in</Form.Button>
                </Form>
            </div>
        )
    }

export default Login