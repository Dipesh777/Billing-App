import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Input Handler
    const inputHandler = (event) => {
        const fieldName = event.target.name
        if (fieldName === 'email') {
            setEmail(event.target.value)
        } else if (fieldName === 'password') {
            setPassword(event.target.value)
        }
    }

    // Handling Form submit
    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <section>
            <header>
                <h2 className='p-3 text-center bg-success text-white'>Welcome To Billing App</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/' className='text-decoration-none ps-3 text-dark fs-4'>Home</Link>
                    <Link to='/' className='text-decoration-none ps-3 text-dark fs-4'>SignUp</Link>
                </nav>
            </header>
            <main className='p-4'>
                <h2 className='text-success'>Login In Your Accout</h2>
                <form onSubmit={handleSubmit} className='loginForm'>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={inputHandler}
                        placeholder='Enter your email ID'
                        className='form-control my-2'
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={inputHandler}
                        placeholder='Enter Your Password'
                        className='form-control my-2'
                    />

                    {/* Login button */}
                    <input type="submit" value='Login' className='btn btn-success mt-2 px-4' />
                    <Link to='/' className='text-decoration-none btn btn-primary mt-2 ms-3'>SignUp</Link>
                    <small className='m-2 text-muted'>Don't have Account!</small>
                </form>
            </main>
        </section>
    )
}

export default Login
