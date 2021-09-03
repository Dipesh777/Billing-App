import React from 'react'
import { Link, Route } from 'react-router-dom'
import AuthContainer from './Authentication/AuthContainer'
import Login from './Authentication/Login'
import Dashboard from './BillingApp/Dashboard'
import Customer from './BillingApp/Customer'
import Product from './BillingApp/Product'
import Account from './BillingApp/Account'

const Routers = (props) => {

    const { handleAuth, isLoggedIn } = props

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token')
        handleAuth()
    }

    return (
        <main className='container'>
            {isLoggedIn ? (
                <>
                    <header className='bg-success p-2 text-white text-center'>
                        <h2 className='fw-normal'>Billing</h2>
                    </header>

                    <div className='d-flex'>
                        <nav className='bg-secondary sidebar' style={{ width: '300px' }}>
                            <ul className='navbar-nav'>
                                <li className='border py-2 text-center fs-5'>
                                    <Link to='/dashboard' className='text-decoration-none text-white'>Dashboard</Link>
                                </li>
                                <li className='border py-2 text-center fs-5'>
                                    <Link to='/customer' className='text-decoration-none text-white'>Customers</Link>
                                </li>
                                <li className='border py-2 text-center fs-5'>
                                    <Link to='/product' className='text-decoration-none text-white'>Products</Link>
                                </li>
                                <li className='border py-2 text-center fs-5'>
                                    <Link to='/dashboard' className='text-decoration-none text-white'>Billing</Link>
                                </li>
                                <li className='border py-2 text-center fs-5'>
                                    <Link to='/account' className='text-decoration-none text-white'>Account</Link>
                                </li>
                                <li className='border py-2 text-center fs-5'>
                                    <Link to='/login' className='text-decoration-none text-white' onClick={handleLogout}>Logout</Link>
                                </li>
                            </ul>

                        </nav>

                        <section className='w-100'>
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/customer' component={Customer} />
                            <Route path='/product' component={Product} />
                            <Route path='/account' component={Account} />
                        </section>
                    </div>
                </>
            ) : (
                <>

                    <Route path='/' component={AuthContainer} exact={true} />
                    <Route path='/login' render={(props) => {
                        return <Login
                            {...props}
                            handleAuth={handleAuth}
                        />
                    }} exact={true} />
                </>
            )}
        </main>
    )
}

export default Routers