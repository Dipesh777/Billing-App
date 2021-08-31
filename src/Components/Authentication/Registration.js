import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = (props) => {
    const [business, setBusiness] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    // Form Input handler
    const handleFormInput = (event) => {
        const fieldName = event.target.name
        if (fieldName === 'business') {
            setBusiness(event.target.value)
        } else if (fieldName === 'name') {
            setName(event.target.value)
        } else if (fieldName === 'password') {
            setPassword(event.target.value)
        } else if (fieldName === 'email') {
            setEmail(event.target.value)
        } else if (fieldName === 'address') {
            setAddress(event.target.value)
        }
    }

    // handling form subbmission
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            username: name,
            email: email,
            password: password,
            businessName: business,
            address: address
        }
        console.log(formData)
    }


    return (
        <div className='d-flex justify-content-center'>
            {/* Registration form */}
            <form style={{ width: '500px' }} className='m-4' onSubmit={handleSubmit}>

                <h2 className='text-success my-4'>Registration</h2>
                <label>Business Name</label>
                <input
                    type="text"
                    className='form-control my-2'
                    name='business'
                    value={business}
                    onChange={handleFormInput}
                />
                <label>User Name</label>
                <input
                    type="text"
                    className='form-control my-2'
                    name='name'
                    value={name}
                    onChange={handleFormInput}
                />
                <label>Password</label>
                <input
                    type="password"
                    className='form-control my-2'
                    name='password'
                    value={password}
                    onChange={handleFormInput} />
                <label>Email</label>
                <input
                    type="email"
                    className='form-control my-2'
                    name='email'
                    value={email}
                    onChange={handleFormInput}
                />
                <label>Address</label>
                <textarea
                    cols="30" rows="3"
                    className='form-control my-2'
                    name='address'
                    value={address}
                    onChange={handleFormInput}>
                </textarea>

                {/* submit Buttton */}
                <input
                    type="submit"
                    className='btn btn-primary my-2' />
            </form>

            {/* Link to Login Page */}
            <div className='m-4'>
                <h1 className='text-info'>Already Have an Accout!</h1>
                <p>Login By Click On Login Button</p>
                <button className='btn btn-primary'><Link to='/' className='text-white text-decoration-none'>Login</Link></button>
            </div>

        </div>
    )
}

export default Registration