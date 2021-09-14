import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='m-4 text-center'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <Link to='/' className='text-decoration-none ps-3 text-dark fs-4'>Home</Link>
                    <Link to='/registration' className='text-decoration-none ps-3 text-dark fs-4'>SignUp</Link>
                    <Link to='/login' className='text-decoration-none ps-3 text-dark fs-4'>Login</Link>
                </nav>
                <h2 className='mt-4'>Billing Management System</h2>
            </header>

            <p className='m-5 p-4 fs-5 font-weight-normal'>Billing Software is designed to handle time and billing tracking as well as invoicing customer for services and products. It helps the business owner’s in a comprehensive manner to keep a track of multiple invoice and accounts just by few clicks on the mouse. It helps in managing chain of stores as well as multiple company billing system. It also provides recurring service and renting business billing solution.</p>

            <img src="billing-bg.png" alt="software Img" />
            <br />

            <p className='m-5 p-4 fs-5 font-weight-normal'>This is app for the Retail shop owners who wants to keep track of his customers, Products, and Bills. Using this App User can add customers and Products details and he can remove also. After Adding Customers and products to the App user can now generate bills. In billing section user can select one customer and add multiple product items and bill will be generate and he can print the bill or download the bill as pdf.</p>
        </div>
    )
}

export default Home