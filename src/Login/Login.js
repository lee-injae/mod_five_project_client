import React from 'react'

const Login = () => {
    return <div>
                <form className="login-form">
                    <label>
                        Email:
                        <input type="text" placeholder="abc@def.com" name=""/> 
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password"
                         value="value" onChange={true}
                        /> 
                    </label>
                    <button className="login-submit-btn" >Log in</button>
                    Not a member? 
                    <button className="signup-submit-btn">Sign up</button>
                </form>
           </div> 
}

export default Login