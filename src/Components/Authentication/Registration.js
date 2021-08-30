import React from 'react'
import { Link } from 'react-router-dom'

const Registration = (props) => {
    return (
        <div className='d-flex justify-content-center'>
            {/* Registration form */}
            <form style={{ width: '500px' }} className='m-4'>
                <h2 className='text-success my-4'>Registration</h2>
                <label>Business Name</label>
                <input type="text" className='form-control my-2' />
                <label>User Name</label>
                <input type="text" className='form-control my-2' />
                <label>Password</label>
                <input type="password" className='form-control my-2' />
                <label>Email</label>
                <input type="email" className='form-control my-2' />
                <label>Address</label>
                <textarea name="" id="" cols="30" rows="3" className='form-control my-2'></textarea>
            </form>

            {/* Link to Login Page */}
            <div className='m-4'>
                <h1>Already Have an Accout!</h1>
                <p>Login By Click On Login Button</p>
                <button className='btn btn-primary'><Link to='/' className='text-white text-decoration-none'>Login</Link></button>
            </div>
        </div>
    )
}

export default Registration