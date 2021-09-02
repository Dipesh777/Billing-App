import React, { useState } from 'react'

const AddCustomers = (props) => {
    const { toggle } = props
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

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

    // handling form Submission
    const handleSubmit = (event) => {
        event.preventDefault()
        toggle()

    }

    return (
        <form onSubmit={handleSubmit} className='m-3 bg-light p-3'>
            <h2 className='text-success'>Add New Customer</h2>
            <label>Customer Name</label>
            <input
                type="text"
                name='name'
                value={name}
                onChange={handleInput}
                placeholder='Enter Customer Name'
                className='form-control'
                />
                <label>Contact Number</label>
            <input
                type="number"
                name='phone'
                value={phone}
                onChange={handleInput}
                placeholder='Enter Contact No.'
                className='form-control'
                />
                <label>Email</label>
            <input
                type="email"
                name='email'
                value={email}
                onChange={handleInput}
                placeholder='Enter Customer Email'
                className='form-control'
            />

            <input type="submit" value='Add' />
        </form>
    )
}

export default AddCustomers