import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import BillList from './utilities/BillList'
import AddBill from './utilities/AddBill'

const Billing = (props) => {
    const [switcher, setSwitcher] = useState(false)
    const [billSearch, setBillSearch] = useState('')
    const [billSearchData, setBillSearchData] = useState([])

    const customers = useSelector((state) => {
        return state.customers
    })
    console.log('Customers', customers)

    // All Bills List 
    const bills = useSelector((state) => {
        return state.bills
    })


    const toggle = () => {
        setSwitcher(!switcher)
    }

    // handleing Bill Search functionlity
    const searchBillHandle = (event) => {
        setBillSearch(event.target.value)
        const searchCustomer = customers.filter(ele => {
            return ele.name.toLowerCase().includes(event.target.value)
        })
        const searchBill = bills.filter(ele => {
            let data
            searchCustomer.forEach(cust => {
                if (cust._id === ele.customer) {
                    data = ele
                }
            })
            return data
        })

        setBillSearchData(searchBill)
    }


    return (
        <div className='m-3'>
            <header>
                <h3 className='p-2 text-center bg-light border rounded'>Bills</h3>
            </header>
            {switcher ? <AddBill toggle={toggle} /> : (
                <>
                    <div className='d-flex justify-content-between'>
                        <div className='align-middle'>
                            <input type="text" value={billSearch} onChange={searchBillHandle} placeholder='Search'
                                className='me-2 border-bottom border-0 border-dark' />
                            <BsSearch />
                        </div>
                        <button className='btn btn-success' onClick={toggle}>Generate Bill</button>
                    </div>

                    {bills.length === 0 ? <h2>No Bills Available</h2> : (
                        <BillList customers={customers} bills={billSearch ? billSearchData : bills} />
                    )}
                </>
            )}
        </div>
    )
}

export default Billing