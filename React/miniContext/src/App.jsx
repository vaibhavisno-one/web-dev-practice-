import React, { Profiler } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

const App = () => {


  return (
    <UserContextProvider>
      <Login/>
      {'  '}
      <Profile/>
    </UserContextProvider>

  )
}

export default App