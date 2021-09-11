import React, { useState } from 'react'

const AddProduct = (props) => {
    const { toggle, product, submitForm } = props
    const [name, setName] = useState(product ? product.name : '')
    const [price, setPrice] = useState(product ? product.price : '')
    const [formError, setFormError] = useState({})
    const errors = {}


    // Handling Form Input
    const handleInput = (event) => {
        const fieldName = event.target.name
        if (fieldName === 'name') {
            setName(event.target.value)
        } else if (fieldName === 'price') {
            setPrice(event.target.value)
        }
    }

    // Client side validation errors
    const validations = () => {
        if (name.length === 0) {
            errors.name = 'Product Name Required'
        }
        if (price.length === 0) {
            errors.price = 'Please Enter Price'
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
                price: price,

            }
            // resetForm
            const reset = () => {
                setName('')
                setPrice('')
            }
            product ? submitForm(formData, toggle, reset, product._id) : submitForm(formData, reset, toggle)

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
            <h2 className='text-success'>{product ? 'Edit Product Details' : 'Add New Product'}</h2>
            <label>Product Name</label>
            <input
                type="text"
                name='name'
                value={name}
                onChange={handleInput}
                placeholder='Enter Product Name'
                className='form-control'
            />
            {formError.name && <span className='text-danger'>{formError.name}</span>} <br />
            <label>Product Price</label>
            <input
                type="number"
                name='price'
                value={price}
                onChange={handleInput}
                placeholder='Enter Price'
                className='form-control'
            />
            {formError.price && <span className='text-danger'>{formError.price}</span>} <br />

            <div className='m-3'>
                <input type="submit" value='Add' className='btn btn-success px-4' />
                <button className='btn btn-secondary ms-2 px-4' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default AddProduct