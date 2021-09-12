import React from 'react'
import Registration from './Registration'
import Home from './Home'

const AuthContainer = (props) => {
    const redirect = () => {
        props.history.push('/login')
    }
    return (
        <main className='m-3 bg-light'>
            <div className='card bg-success'>
                <div className='card-body'>
                    <h1 className='text-white fw-normal text-center'>Get Started With Billing App</h1>
                </div>
            </div>
            <Home />
            <Registration redirect={redirect} />
        </main>
    )
}

export default AuthContainer