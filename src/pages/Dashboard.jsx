import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import View from '../Components/View'


function Dashboard() {
const[userName,setUserName]=useState("")
useEffect(() => {
 if (sessionStorage.getItem("user")) {
  setUserName(JSON.parse(sessionStorage.getItem("user")).username)
 }else{
  setUserName("")
 }
}, [])

  return (
<> 
<Header/>
<div className='row container-fluid '>
  <div className='col-lg-8'>
   <h2 className='fw-bold'>Welcome<span className='text-success'>{userName}</span></h2>
  <View/>
  </div>
  <div className='col-lg-4 p-3'>
  <Profile/>
  </div>

</div>
</>
  )
}

export default Dashboard