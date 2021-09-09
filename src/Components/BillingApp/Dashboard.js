import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Dashboard = (props) => {
    

    console.log('I am Dashboard')
    return (
        <main>
            <header>
                <h2>DashBoard</h2>
            </header>
            <section>
                <div>
                    customers
                </div>
                <div>
                    Products
                </div>
                <div>
                    Orders
                </div>
            </section>
        </main>
    )
}

export default Dashboard