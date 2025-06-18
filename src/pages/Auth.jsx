import React, { useContext, useState } from 'react'
import img3 from '../images/logicon-removebg-preview.png'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../../services/allApi';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import { tokenAuthContext } from '../contexts/ContextAPI';



function Auth({insideRegister}) {

  const {setIsAuthosided}=useContext(tokenAuthContext)
  const[userData,setUserData]=useState({username:"",email:"",password:""})
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate =useNavigate()
  console.log(userData);

  const handleRegister=async(e)=>{
    e.preventDefault()
    const {username,email,password}=userData
    if (username && email && password) {
    // api call
    
    const result= await registerAPI(userData)
    console.log(result);  

    if (result.status==200) {
      navigate('/login')
      setUserData({username:"",email:"",password:""})
    }
    else{
      if (result.status==406) {
        alert(result.response.data)
        setUserData({username:"",email:"",password:""})

        
      }
      
    }
    }else{
      toast.warning("please fill in the form")
    }
   
  }

  const handleLogin= async(e)=>{
    e.preventDefault
    if (userData.email && userData.password) {
      // api call
      try {
        const result=await loginAPI(userData)
        console.log(result);

        if (result.status==200) {
          setIsLoggedIn(true)
          setTimeout(() => {
            sessionStorage.setItem("user",JSON.stringify(result.data.user))
            setIsAuthosided(true)
            console.log(result.data.user);           
          sessionStorage.setItem("token",result.data.token)
          setUserData({username:"",email:"",password:""})
          navigate('/')
          setIsLoggedIn(false)
          }, 2000);
        }
        else {
if(result.status==404){
            toast.error(result.response.data)
}        }
        
      } catch (error) {
        console.log(error);
        
      }
    } else{
      toast.warning('Please in the fields ')
    }
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='row w-75 mt-5' style={{backgroundColor:'GrayText'}}>
        <div className='col-lg-6 position-relative'>
          <img className='w-100' src={img3} alt=""    />
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
          
        <div className='w-lg-50 w-75'>
          
        <h5 className='mb-2 fw-bold'><i class="fa-brands fa-rebel" style={{color:'#732b2f'}}></i>Project Fair</h5>
        <div className='text-secondary mb-5'>Sign Up to Your Account</div>
{   insideRegister &&     
  <Form.Control value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="User Name"  className='mb-3'/>
}        <Form.Control value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="Email Address"  className='mb-3'/>
        <Form.Control value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Password"  className='mb-3'/>
        {
          insideRegister?
          <div>
            <button onClick={e=>handleRegister(e)} className='btn btn-success w-100  '> Sign Up</button>
            <div>Already have an account?<Link className='ms-1' to={'/login'}>Login</Link></div>
          </div>
          :
          <div>
           <button onClick={(e)=>handleLogin(e)} className='btn btn-success w-100  '> Sign In 
            { isLoggedIn &&
            <Spinner animation="border" />
            }</button>
          <div>Don't have an account?<Link className='ms-1' to={'/register'}>Register</Link></div>
          </div>
        }
        </div>


        </div>

      </div>
    </div>
  )
}

export default Auth