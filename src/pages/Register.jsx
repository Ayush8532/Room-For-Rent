import React from 'react'
import '../components/component_css/Register.css'

const Register = () => {
  return (
      <> 
      <div className='register-container'>
        <div className='wrapper'>
            <h1 className='register-title'>Create An Account</h1>
            <form action="" className='Form'>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='E-Mail'/>
                <input type="text" placeholder='Mobile No.'/>
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Confirm Password'/>
                <span className='Agreement'>
                    By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </span>
                <button className='register-button'>Create Account</button>
            </form>
        </div>
      
    </div>
    </>
  )
}

export default Register
