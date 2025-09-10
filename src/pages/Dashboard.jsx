import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import View from '../Components/View'

function Dashboard() {
  // State to store the username of the logged-in user
  const [userName, setUserName] = useState("")

  // Fetch the username from sessionStorage when the component mounts
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUserName(JSON.parse(sessionStorage.getItem("user")).username)
    } else {
      setUserName("")
    }
  }, [])

  return (
    <> 
      {/* Header component */}
      <Header />
      
      {/* Main content area */}
      <div className='row container-fluid '>
        {/* Left section: Welcome message and View component */}
        <div className='col-lg-8'>
          <h2 className='fw-bold'>Welcome<span className='text-success'>{userName}</span></h2>
          <View />
        </div>
        
        {/* Right section: Profile component */}
        <div className='col-lg-4 p-3'>
          <Profile />
        </div>
      </div>
    </>
  )
}

export default Dashboard