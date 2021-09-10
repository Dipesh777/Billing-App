import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsTrash, BsDashSquare, BsPlusSquare } from 'react-icons/bs'
import Select from 'react-select'
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
    const [formError, setFormError] = useState({})
    const error = {}

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
        // if (field === 'customer') {
        //     setCustomerSelect(event.target.value)
        // } else 
        if (field === 'product') {
            setProductSelect(event.target.value)
        } else if (field === 'quantity') {
            setQuantity(event.target.value)
        }
    }

    const handleCustomer = (customerSelect) => {
        setCustomerSelect(customerSelect)
    }
    const customerOption = customers.map((ele) => {
        return { value: ele._id, label: ele.name }
    })


    // Form Validation
    const validater = () => {
        if (customerSelect === '') {
            error.customer = 'Please Select Customer'
        }
        if (productSelect === '') {
            error.product = 'Please Select Product'
        }
        if (quantity === '') {
            error.quantity = 'Please Enter Quantity'
        }
    }

    // ------------------------ADD CART-------------------

    const addCart = (event) => {
        event.preventDefault()
        validater()
        if (Object.keys(error).length === 0) {
            setFormError({})

            // Data for lineItem in form submission
            const cartData = {
                product: productSelect,
                quantity: quantity
            }
            setCart([...cart, cartData])
            setProductSelect('')
            setQuantity('')
            cartForm()
        } else {
            setFormError(error)
        }
    }

    const cartForm = () => {
        const cartProduct = products.find(ele => {
            return ele._id === productSelect
        })
        // data for showing detail in cart table
        const showData = {
            product: cartProduct.name,
            quantity: quantity,
            remove: function () {
                return this.quantity -= 1
            },
            add: function () {
                return this.quantity += 1
            },
            price: cartProduct.price,
            total: quantity * cartProduct.price
        }
        console.log('typeoffff', typeof showData.total)
        setShowCart([...showCart, showData])
    }
    // All Product Total Price
    const cartTotal = () => {
        let result = 0
        showCart.forEach(ele => {
            result += ele.total
        })
        return result
    }
    // ------------------------ADD CART-------------------


    // Delete Cart Item
    const cartDelete = (e, idx) => {
        e.preventDefault()
        const deleteItem = showCart.filter((ele, ind) => {
            return ind !== idx
        })
        setShowCart(deleteItem)
    }



    // ------------------Starting form submission=------------------
    // Handleing Form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        validater()
        if (cart.length > 0) {
            const formData = {
                date: date,
                customer: customerSelect.value,
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

        } else {
            setFormError(error)
        }
    }
    // ------------------Ending form submission=------------------

    return (
        <>
            <h2 className='text-success'>Generate New Bill</h2>
            <form onSubmit={handleSubmit} className='d-flex m-1'>
                {/* select customer */}
                <div className='mx-3 p-2'>

                    <label className='my-2 fs-5'>Date</label>
                    <Datepicker selected={date} onChange={date => setDate(date)} className='form-control' />

                    {/* Selcet Customer */}
                    <label className='my-2 fs-5'>Customer</label>
                    <Select value={customerSelect} name='customer' onChange={handleCustomer} options={customerOption}>
                        {/* <option value="">Select Customer</option> */}
                        {/* {customers.map(ele => {
                            return <option key={ele._id} value={ele._id}>{ele.name}</option>
                        })} */}
                    </Select>
                    {Object.keys(formError).length > 0 && <span className='text-danger'>{formError.customer}</span>}
                    <br />

                    {/* add product */}
                    <label className='my-2 fs-5'>Products</label>
                    <select name="product" value={productSelect} onChange={handleForm} className='form-control'>
                        <option value="">Select Product</option>
                        {products.map(ele => {
                            return <option key={ele._id} value={ele._id}>{ele.name}</option>
                        })}
                    </select>
                    {Object.keys(formError).length > 0 && <span className='text-danger'>{formError.product}</span>}
                    <br />

                    <label className='fs-5'>Quantity</label>
                    <input type="number" name="quantity" value={quantity} onChange={handleForm} className='form-control' placeholder='1' />
                    {Object.keys(formError).length > 0 && <span className='text-danger'>{formError.quantity}</span>}
                    <br />

                    <button onClick={addCart} className='btn btn-info m-2'>Add Cart</button>
                    <button onClick={toggle} className='btn btn-secondary m-2'>Cancel</button>
                </div>

                {/* Cart */}
                <div className='ms-5'>
                    <h3 style={{ width: '300px' }} className='p-5'>Cart Item - {showCart.length}</h3>
                    {showCart.length === 0 ? <h3 className='text-info border text-center' style={{ paddingTop: '100px',paddingBottom:'100px' }}>Cart Is Empty</h3> : (
                        <table className='table text-center align-middle' style={{ width: '200px' }}>
                            <thead>
                                <tr>
                                    <th>Remove</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showCart.map((ele, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td><button className='btn text-danger' onClick={(e) => cartDelete(e, idx)}><BsTrash /></button></td>
                                            <td>{ele.product}</td>
                                            <td>
                                                <button className='btn p-0 mb-2 me-1' onClick={(e) => {
                                                    e.preventDefault()
                                                    ele.remove()
                                                }}><BsDashSquare /></button>
                                                {ele.quantity}
                                                <button className='btn p-0 mb-2 ms-1' onClick={(e) => {
                                                    e.preventDefault()
                                                    ele.add()
                                                }}><BsPlusSquare /></button></td>
                                            <td>{ele.price}</td>
                                            <td>{ele.total}</td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>{cartTotal()}</td>
                                </tr>
                            </tbody>
                        </table>
                    )} <br />
                    <input type="submit" value='Generate Bill' className='btn btn-success mt-5' />
                </div>
            </form>
        </>

    )
}

export default AddBill