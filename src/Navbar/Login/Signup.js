import React from 'react'
import { Form } from 'semantic-ui-react'
    
    function SignupForm (props) {
        const options = [
            { key: 'a', text: 'Adams Morgan', value: props.locationIds[0] },
            { key: 'd', text: 'Dupont Circle', value: props.locationIds[1] },
            { key: 'k', text: 'Kalorama', value: props.locationIds[2] },
            { key: 'u', text: 'U Street', value: props.locationIds[3] },
            { key: 'w', text: 'Woodley Park', value: props.locationIds[4] },
        ]
        return (
            <div>
                <Form onSubmit={props.handleSubmit}>
                        <Form.Input width={4}
                             required 
                            label="Email" 
                            name="email" 
                            placeholder="abc@def.com" 
                            onChange={props.handleChange} 
                            value={props.form.email}/>  
                        <Form.Input width={4}
                             required 
                            label="Password" 
                            name="password" 
                            type="password" 
                            onChange={props.handleChange} 
                            value={props.form.password}/>
                        <Form.Input width={4}
                             required 
                            label="Nickname" 
                            name="nickname" 
                            placeholder="nickname" 
                            onChange={props.handleChange} 
                            value={props.form.nickname}/>     
                        <Form.Select width={4}
                             required 
                            label="Location" 
                            name="location_id" 
                            options={options} 
                            placeholder="Select your location" 
                            onChange={props.handleDropdownChange} />         
                    <Form.Button>Sign up</Form.Button>
                </Form>
            </div>
        )
    }
    

export default SignupForm