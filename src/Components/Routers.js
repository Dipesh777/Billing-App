import React from 'react'
import { Route } from 'react-router-dom'
import AuthContainer from './Authentication/AuthContainer'
import Login from './Authentication/Login'

const Routers = (props) => {

    return (
        <main className='container'>
            {/* <Link to='/'></Link> */}
            <Route path='/' component={AuthContainer} exact={true} />
            <Route path='/login' component={Login} />
        </main>
    )
}

export default Routers