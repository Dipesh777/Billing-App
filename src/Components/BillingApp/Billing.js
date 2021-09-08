import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BillList from './utilities/BillList'
import AddBill from './utilities/AddBill'

const Billing = (props) => {
    const [switcher, setSwitcher] = useState(false)

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


    return (
        <div className='m-3'>
            <header>
                <h3 className='p-2 text-center bg-light border rounded'>Bills</h3>
            </header>
            {switcher ? <AddBill toggle={toggle} /> : (
                <>
                    <button className='btn btn-success' onClick={toggle}>Generate Bill</button>
                    {bills.length === 0 ? <h2>No Bills Available</h2> : (
                        <BillList customers={customers} bills={bills} />
                    )}
                </>
            )}
        </div>
    )
}

export default Billing