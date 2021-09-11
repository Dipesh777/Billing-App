import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startCustomers } from '../../Actions/billingAppActions'
import { asyncProduct } from '../../Actions/productActions'
import { startAllBills } from '../../Actions/billingAction'

const Dashboard = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startCustomers())
        dispatch(asyncProduct())
        dispatch(startAllBills())
    })
    console.log('I am Dashboard')
    return (
        <main>
            <header className='m-2 bg-light p-2 text-center text-success'>
                <h3>DashBoard</h3>
            </header>
            <section>
                <div className='d-flex m-4 justify-content-around'>

                    <div className="card text-white bg-success mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-warning mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Warning card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard