import React from 'react'
import '../components/component_css/Register.css'
const Login = () => {
  return (
    <>
        <div className='register-container'>
          <div className='login-wrapper'>
            <h1 className='register-title'>SIGN IN</h1>
            <form action="" className='signin-form'>
              <input type="text" placeholder='username' className='login-input' />
              <input type="text" placeholder='password' className='login-input' />
              <button className='register-button'>SIGN IN</button>
              <a href="https://www.google.com/">FORGET PASSWORD</a>
              <a href="https://www.google.com/">CREATE A NEW ACCOUNT</a>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login
