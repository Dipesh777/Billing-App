import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Routers from './Components/Routers'
import { startCustomers } from './Actions/billingAppActions'
import { asyncProduct } from './Actions/productActions'
import { startAllBills } from './Actions/billingAction'



const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  // checking for token in localstorage
  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth()
      dispatch(startCustomers())
      dispatch(asyncProduct())
      dispatch(startAllBills())

    }
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <Routers handleAuth={handleAuth} isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App;
