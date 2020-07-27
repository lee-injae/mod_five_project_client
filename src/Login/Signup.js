import React from 'react'
import { Form } from 'semantic-ui-react'
    
    const options = [
        { key: 'a', text: 'Adams Morgan', value: 41 },
        { key: 'd', text: 'Dupont Circle', value: 42 },
        { key: 'k', text: 'Kalorama', value: 43 },
        { key: 'u', text: 'U Street', value: 44 },
        { key: 'w', text: 'Woodley Park', value: 45 },
    ]
    
    function SignupForm (props) {
     
            return (
                <>
                <h2>Sign up</h2>
                <Form onSubmit={props.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input fluid required label="Email" name="email" placeholder="abc@def.com" 
                            onChange={props.handleChange} value={props.form.email}/>  
                        <Form.Input fluid required label="Password" name="password" placeholder="password" 
                            onChange={props.handleChange} value={props.form.password}/>
                        <Form.Input fluid required label="Nickname" name="nickname" placeholder="nickname" 
                            onChange={props.handleChange} value={props.form.nickname}/>     
                        <Form.Select fluid required label="Location" name="location_id" 
                            options={options} placeholder="Location" onChange={props.handleDropdownChange} />       
                    </Form.Group>                 
                    <Form.Button>Sign up</Form.Button>
                </Form>
                </>)
    }
    

export default SignupForm