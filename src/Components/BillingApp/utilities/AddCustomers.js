import React, { useState } from 'react'


const AddCustomers = (props) => {
    const { toggle, customer, submitForm } = props
    const [name, setName] = useState(customer ? customer.name : '')
    const [phone, setPhone] = useState(customer ? customer.mobile : '')
    const [email, setEmail] = useState(customer ? customer.email : '')
    const [formError, setFormError] = useState({})
    const errors = {}


    // Handling Form Input
    const handleInput = (event) => {
        const fieldName = event.target.name
        if (fieldName === 'name') {
            setName(event.target.value)
        } else if (fieldName === 'phone') {
            setPhone(event.target.value)
        } else if (fieldName === 'email') {
            setEmail(event.target.value)
        }
    }

    // Client side validation errors
    const validations = () => {
        if (name.length === 0) {
            errors.name = 'name is Required'
        }
        if (email.length === 0) {
            errors.email = 'email is Required'
        }
        if (phone.length === 0) {
            errors.phone = 'Contact is Required'
        }
    }

    // handling form Submission
    const handleSubmit = (event) => {
        event.preventDefault()
        validations()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            // formData
            const formData = {
                name: name,
                mobile: phone,
                email: email
            }
            // resetForm
            const reset = () => {
                setName('')
                setEmail('')
                setPhone('')
            }
            customer ? submitForm(formData, toggle, reset, customer._id) : submitForm(formData, toggle, reset)

        } else {
            setFormError(errors)
        }
    }

    //  Handling cancel button
    const handleCancel = () => {
        toggle()
    }

    return (
        <form onSubmit={handleSubmit} className='m-3 bg-light p-3'>
            {customer ? <h2 className='text-success'>Edit Customer Detail</h2> : <h2 className='text-success'>Add New Customer</h2>}
            <label>Customer Name</label>
            <input
                type="text"
                name='name'
                value={name}
                onChange={handleInput}
                placeholder='Enter Customer Name'
                className='form-control'
            />
            {formError.name && <span className='text-danger'>{formError.name}</span>} <br />
            <label>Contact Number</label>
            <input
                type="number"
                name='phone'
                value={phone}
                onChange={handleInput}
                placeholder='Enter Contact No.'
                className='form-control'
            />
            {formError.phone && <span className='text-danger'>{formError.phone}</span>} <br />
            <label>Email</label>
            <input
                type="email"
                name='email'
                value={email}
                onChange={handleInput}
                placeholder='Enter Customer Email'
                className='form-control'
            />
            {formError.email && <span className='text-danger'>{formError.email}</span>} <br />

            <div className='m-3'>
                <input type="submit" value='Add' className='btn btn-success px-4' />
                <button className='btn btn-secondary ms-2 px-4' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default AddCustomers