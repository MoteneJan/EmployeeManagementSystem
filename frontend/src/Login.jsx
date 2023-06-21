import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='bg-white p-3 rounede w-25 border'>
            <h2>Login</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email Address</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-seccess border  w-100 rounded-0'>Login</button>
                <p>Agree to Terms and Conditions Policies?</p>
                <button className='btn btn-default border w-100  rounded-0'>Create Account</button>
            </form>
        </div>

    </div>
  )
}

export default Login