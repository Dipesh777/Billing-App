import React, { useState, useEffect } from 'react'
import Routers from './Components/Routers'


const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  // checking for token in localstorage
  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth()
    }
  },[])

  return (
    <div>
      <Routers handleAuth={handleAuth} isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App;
