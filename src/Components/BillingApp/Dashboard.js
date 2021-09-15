import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startCustomers } from '../../Actions/billingAppActions'
import { asyncProduct } from '../../Actions/productActions'
import { startAllBills } from '../../Actions/billingAction'
import DashChart from './utilities/DashBoardChart'

const Dashboard = (props) => {
    const dispatch = useDispatch()
    const customers = useSelector((state) => {
        return state.customers
    })
    const products = useSelector((state) => {
        return state.product
    })
    const bills = useSelector((state) => {
        return state.bills
    })

    useEffect(() => {
        dispatch(startCustomers())
        dispatch(asyncProduct())
        dispatch(startAllBills())
    }, [])

    //calculating Revenue 
    const totalRevenue = bills.reduce((rev, bill) => {
        return rev + bill.total
    }, 0)

    return (
        <main>
            <header className='m-2 bg-light p-2 text-center text-success'>
                <h3>DashBoard</h3>
            </header>
            <section>
                <div className='d-flex m-4 justify-content-around'>

                    <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Customers</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Connected Customers</h5>
                            <p className="card-text text-center fs-1">{customers.length}</p>
                        </div>
                    </div>
                    <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Products</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Available Products</h5>
                            <p className="card-text text-center fs-1">{products.length}</p>
                        </div>
                    </div>
                    <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Purchases</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Purchases of customers</h5>
                            <p className="card-text text-center fs-1">{bills.length}</p>
                        </div>
                    </div>
                    <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Revenue</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Revenue Generated</h5>
                            <p className="card-text text-center fs-1">{totalRevenue}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='' >
                <DashChart />
            </div>
        </main>
    )
}

export default Dashboard