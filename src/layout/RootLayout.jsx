import React from 'react'
import {Outlet} from 'react-router-dom'
import './RootLayout.css'
import NavigationBar from '../components/NavigationBar'
function RootLayout() {
  return (
    <div className='layout'>
      <NavigationBar />
      <Outlet />
      {/* <Footer /> */}
    </div>    
  )
}

export default RootLayout;