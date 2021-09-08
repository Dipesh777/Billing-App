import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import { asycAddCustomer } from '../../Actions/billingAppActions'
import AddCustomers from './utilities/AddCustomers'
import CustomerTable from './utilities/CustomerTable'


const Customer = (props) => {
    const dispatch = useDispatch()
    const [formToggler, setFormToggler] = useState(false)
    const [searchCustomer, setSearchCustomer] = useState('')
    const [searchData, setSearchData] = useState([])

    // customers
    const customers = useSelector((state) => {
        return state.customers
    })

    // Toggler for Adding new Customer
    const toggle = () => {
        setFormToggler(!formToggler)
    }

    const submitForm = (formData, toggle, reset) => {
        dispatch(asycAddCustomer(formData, toggle, reset))
    }


    // handleSearch
    const handleSearch = (event) => {
        const input = event.target.value
        setSearchCustomer(input)
        const result = customers.filter(ele => {
            return ele.name.toLowerCase().includes(input) || ele.mobile.includes(input)
        })
        setSearchData(result)
    }

    return (
        <div className='m-3'>
            <header>
                <h3 className='p-2 text-center bg-light border rounded'>Customers</h3>
            </header>
            {
                formToggler ? <AddCustomers toggle={toggle} submitForm={submitForm} /> : (
                    <>
                        <div className='d-flex justify-content-between'>
                            <div className='align-middle'>
                                <input type="text" value={searchCustomer} onChange={handleSearch} placeholder='Search'
                                    className='me-2 border-bottom border-0 border-dark' />
                                <BsSearch />
                            </div>
                            <button onClick={toggle} className='btn btn-success'>Add Customer +</button>
                        </div>

                        <CustomerTable data={searchCustomer ? searchData : customers} />
                    </>
                )
            }

        </div>
    )
}

export default Customer