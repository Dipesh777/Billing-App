import React from 'react'
import Registration from './Registration'
import Home from './Home'
import Footer from './Footer'

const AuthContainer = (props) => {
   
    return (
        <main className='m-3 bg-light'>
            <div className='card bg-success'>
                <div className='card-body'>
                    <h1 className='text-white fw-normal text-center'>Get Started With Billing App</h1>
                </div>
            </div>
            <Home />
            <Footer />
        </main>
    )
}

export default AuthContainer