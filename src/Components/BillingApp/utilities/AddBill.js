import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { asyncProduct } from '../../../Actions/productActions'
import { asyncNewBill } from '../../../Actions/billingAction'

const AddBill = (props) => {
    const { toggle } = props
    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date())
    const [customerSelect, setCustomerSelect] = useState('')
    const [productSelect, setProductSelect] = useState('')
    const [quantity, setQuantity] = useState('')
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState([])

    useEffect(() => {
        dispatch(asyncProduct())
    }, [])

    // customers
    const customers = useSelector((state) => {
        return state.customers
    })

    // All Bills List 
    const products = useSelector((state) => {
        return state.product
    })

    // Handling form input 
    const handleForm = (event) => {
        const field = event.target.name
        if (field === 'customer') {
            setCustomerSelect(event.target.value)
        } else if (field === 'product') {
            setProductSelect(event.target.value)
        } else if (field === 'quantity') {
            setQuantity(event.target.value)
        }
    }

    // Add Cart 
    const addCart = (event) => {
        event.preventDefault()
        const cartData = {
            product: productSelect,
            quantity: quantity
        }
        setCart([...cart, cartData])
        setProductSelect('')
        setQuantity('')
        cartForm()
    }

    const cartForm = () => {
        const cartProduct = products.find(ele => {
            return ele._id === productSelect
        })
        const showData = {
            product: cartProduct.name,
            quantity: quantity
        }
        setShowCart([...showCart, showData])
    }

    // Delete Cart Item
    const cartDelete = (e, idx) => {
        e.preventDefault()
        const deleteItem = showCart.filter((ele, ind) => {
            return ind !== idx
        })
        setShowCart(deleteItem)
    }



    // Handleing Form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            date: date,
            customer: customerSelect,
            lineItems: cart
        }
        // reset form
        const reset = () => {
            setDate(new Date())
            setCustomerSelect('')
            setProductSelect('')
            setQuantity('')
            setCart([])
        }

        dispatch(asyncNewBill(formData, toggle, reset))
    }

    return (
        <>
            <h2 className='text-success'>Generate New Bill</h2>
            <form onSubmit={handleSubmit} className='d-flex justify-content-around'>
                {/* select customer */}
                <div className='mx-3'>
                    <div className='d-flex'>
                        <select value={customerSelect} name='customer' onChange={handleForm} className='form-control mx-5'>
                            <option value="">Select Customer</option>
                            {customers.map(ele => {
                                return <option key={ele._id} value={ele._id}>{ele.name}</option>
                            })}
                        </select>
                        <Datepicker selected={date} onChange={date => setDate(date)} className='form-control' />
                    </div>

                    {/* add product */}
                    <label className='my-2 fs-3'>Products</label>
                    <select name="product" value={productSelect} onChange={handleForm} className='form-control'>
                        <option value="">Select customer</option>
                        {products.map(ele => {
                            return <option key={ele._id} value={ele._id}>{ele.name}</option>
                        })}
                    </select> <br />
                    <label className='fs-3'>Quantity</label>
                    <input type="number" name="quantity" value={quantity} onChange={handleForm} className='form-control' placeholder='1' />
                    <button onClick={addCart} className='btn btn-info m-2'>Add Cart</button>
                    <button onClick={toggle} className='btn btn-secondary m-2'>Cancel</button>
                </div>

                {/* Cart */}
                <div>
                    <h3>Cart</h3>
                    {showCart.length === 0 ? 'Cart Is Empty' : (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showCart.map((ele, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{ele.product}</td>
                                            <td>{ele.quantity}</td>
                                            <td><button className='btn btn-danger' onClick={(e) => cartDelete(e, idx)}>Delete</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    )} <br />
                    <input type="submit" value='Generate Bill' className='btn btn-success m-2' />
                </div>
            </form>
        </>

    )
}

export default AddBill