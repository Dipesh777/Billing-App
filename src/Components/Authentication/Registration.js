import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncRegister } from '../../Actions/authActions'

const Registration = (props) => {
    const dispatch = useDispatch()
    const [business, setBusiness] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}


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

    // Client side validation errors
    const validations = () => {
        if (business.length === 0) {
            errors.business = 'Business Name is Required'
        }
        if (name.length === 0) {
            errors.name = 'Name is Required'
        }
        if (password.length === 0) {
            errors.password = 'password is Required'
        }
        if (email.length === 0) {
            errors.email = 'email is Required'
        }
        if (address.length === 0) {
            errors.address = 'address is Required'
        }
    }

    // handling form subbmission
    const handleSubmit = (event) => {
        event.preventDefault()

        validations()

        if (Object.keys(errors).length === 0) {
            setFormError({})

            // formData
            const formData = {
                username: name,
                email: email,
                password: password,
                businessName: business,
                address: address
            }
            // redirecting to login
            const redirect = () => {
                props.history.push('/login')
            }
            // reset form 
            const resetForm = () => {
                setBusiness('')
                setName('')
                setPassword('')
                setEmail('')
                setAddress('')
            }
            // dispacting action to register new user
            dispatch(asyncRegister(formData, redirect, resetForm))
        } else {
            setFormError(errors)
        }

    }


    return (
        <div className='d-flex justify-content-center'>
            {/* Registration form */}
            <form style={{ width: '500px' }} className='m-4' onSubmit={handleSubmit}>

                <h1 className='text-success my-4'>Registration</h1>
                <label className='fs-4'>Business Name</label>
                <input
                    type="text"
                    className='form-control my-1'
                    name='business'
                    value={business}
                    onChange={handleFormInput}
                />
                {formError.business && <span className='text-danger'>{formError.business}</span>} <br />

                <label className='fs-4'>User Name</label>
                <input
                    type="text"
                    className='form-control my-1'
                    name='name'
                    value={name}
                    onChange={handleFormInput}
                />
                {formError.name && <span className='text-danger'>{formError.name}</span>} <br />

                <label className='fs-4'>Password</label>
                <input
                    type="password"
                    className='form-control my-1'
                    name='password'
                    value={password}
                    onChange={handleFormInput}
                />
                {formError.password && <span className='text-danger'>{formError.password}</span>} <br />

                <label className='fs-4'>Email</label>
                <input
                    type="email"
                    className='form-control my-1'
                    name='email'
                    value={email}
                    onChange={handleFormInput}
                />
                {formError.email && <span className='text-danger'>{formError.email}</span>} <br />

                <label className='fs-4'>Address</label>
                <textarea
                    cols="30" rows="3"
                    className='form-control my-1'
                    name='address'
                    value={address}
                    onChange={handleFormInput}>
                </textarea>
                {formError.address && <span className='text-danger'>{formError.address}</span>} <br />

                {/* submit Buttton */}
                <input
                    type="submit"
                    className='btn btn-primary my-1' />
            </form>

            {/* Link to Login Page */}
            <div className='m-5 ps-5 text-center' style={{ paddingTop: '250px' }}>
                <h1 className=''>Already <br /> Have an Accout!</h1>
                <p>Login By Click On Login Button</p>
                <button className='btn btn-primary'><Link to='/' className='text-white text-decoration-none'>Login</Link></button>
            </div>

        </div>
    )
}

export default Registration