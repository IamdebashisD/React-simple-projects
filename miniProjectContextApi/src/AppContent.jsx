import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import BackEndData from './components/BackEndData'

function AppContent() {
  return (
    <div>
        <Login/>
        <Profile/>
        <BackEndData/>
    </div>
  )
}

export default AppContent