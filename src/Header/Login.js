import React from 'react'
import sea from "../Photo/sea-photo11.jpg"

const Login = () => {
  return (
    <div className='login-form'>
        <img src={sea} alt="" width="1500" height="725"/>
        <div className='log-ALL'>
            <h2>WELCOME BACK</h2>

            <label >E-Mail</label>
            <input type="email" className="box-log"  placeholder="Enter Your Email" />

            <label >Password</label>
            <input type="password" className="box-log" placeholder="Enter Your password"  />
            
            <a href="">Forget Password?</a>
            <br/>
            <div className='btn-form'>
            <button className="btn" id="Submit" > SIGN IN </button>
            </div>
            <div className='check'>
                  <input type="checkbox" id="remember"/>
                  <label for="remember">remember me</label>
            </div>
            <h3>or</h3>
            <div className='SignUpL'>
                <h4>Here for the first time?</h4>
                <div className="SignLink">
                    <a href="/Sign">Create an account</a>
                </div>
      
            </div>
      
        </div>
    </div>
  )
}

export default Login
