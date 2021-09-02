import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startCustomers } from '../../Actions/billingAppActions'
import AddCustomers from './utilities/AddCustomers'


const Customer = (props) => {
    const dispatch = useDispatch()
    const [formToggler, setFormToggler] = useState(false)

    useEffect(() => {
        dispatch(startCustomers)
    }, [])

    // customers
    const customers = useSelector((state) => {
        return state.customers
    })
    console.log(customers)
    // Toggler for Adding new Customer
    const toggle = () => {
        setFormToggler(!formToggler)
    }

    return (
        <div className='m-3'>
            <header>
                <h3 className='p-2 text-center bg-light border border'>Customers</h3>
            </header>
            <button onClick={toggle} className='btn btn-success'>Add Customer +</button>
            {
                formToggler && <AddCustomers toggle={toggle} />
            }
            <ul>

            </ul>
        </div>
    )
}

export default Customer