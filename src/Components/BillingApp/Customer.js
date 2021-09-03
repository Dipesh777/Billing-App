import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startCustomers } from '../../Actions/billingAppActions'
import { asycAddCustomer } from '../../Actions/billingAppActions'
import AddCustomers from './utilities/AddCustomers'
import CustomerTable from './utilities/CustomerTable'


const Customer = (props) => {
    const dispatch = useDispatch()
    const [formToggler, setFormToggler] = useState(false)

    // customers
    const customers = useSelector((state) => {
        return state.customers
    })

    useEffect(() => {
        dispatch(startCustomers())
    }, [customers])


    // Toggler for Adding new Customer
    const toggle = () => {
        setFormToggler(!formToggler)
    }

    const submitForm = (formData, toggle, reset) => {
        dispatch(asycAddCustomer(formData, toggle, reset))
    }

    return (
        <div className='m-3'>
            <header>
                <h3 className='p-2 text-center bg-light border rounded'>Customers</h3>
            </header>
            {
                formToggler ? <AddCustomers toggle={toggle} submitForm={submitForm} /> : (
                    <>
                        <button onClick={toggle} className='btn btn-success'>Add Customer +</button>
                        <CustomerTable data={customers} />
                    </>
                )
            }

        </div>
    )
}

export default Customer