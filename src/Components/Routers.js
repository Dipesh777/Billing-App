import React from 'react'
import { Link, Route } from 'react-router-dom'
import swal from 'sweetalert'
import AuthContainer from './Authentication/AuthContainer'
import Login from './Authentication/Login'
import Registration from './Authentication/Registration'
import Dashboard from './BillingApp/Dashboard'
import Customer from './BillingApp/Customer'
import Product from './BillingApp/Product'
import Billing from './BillingApp/Billing'
import Account from './BillingApp/Account'
import Footer from './Authentication/Footer'

const Routers = (props) => {

    const { handleAuth, isLoggedIn } = props

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token')
        handleAuth()
        swal('Logged Out', 'successfully', 'success')

    }

    return (
        <main className='container'>
            {isLoggedIn ? (
                <>
                    <header className='bg-success p-2 text-white text-center'>
                        <h2 className='fw-normal'>Billing</h2>
                    </header>

                    <div className='d-flex' style={{ height: '100%' }}>
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
                                    <Link to='/billing' className='text-decoration-none text-white'>Billing</Link>
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
                            <Route path='/product' component={Product} exact={true} />
                            <Route path='/billing' component={Billing} exact={true} />
                            <Route path='/account' component={Account} />
                        </section>
                    </div>
                    <Footer />
                </>
            ) : (
                <>

                    <Route path='/' component={AuthContainer} exact={true} />
                    <Route path='/registration' component={Registration} exact={true} />
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