import React, { useContext, useEffect, useState } from 'react'
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
  const[error,setError]=useState({})
  const navigate =useNavigate()
  console.log(userData);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const activated = queryParams.get("activated");
    console.log(activated);
    
  
    if (activated === "1") {
      toast.success("Account activated successfully. Please login.");

      setTimeout(() => {
        // ✅ remove ?activated=1 so it doesn’t show again on refresh
      window.history.replaceState({}, "", window.location.pathname);
      }, 3000);
  
      
    }
  }, []);

  
  
  const regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validate =(values)=>{
       const errors={}
      if(insideRegister && !values.username){
        errors.username="Username is required"
      }
      if(!values.email){
        errors.email="Email is required"
  }
  else{
     if (!regexEmail.test(values.email)) {
      errors.email="Enter a valid email"
     }
    }
     if (!values.password) {
      errors.password="Password is required"
     }

      return errors
    }
  

  const handleRegister=async(e)=>{
    e.preventDefault()
    const validation= validate(userData)
    setError(validation)
    if (Object.keys(validation).length>0) {
      return
    }
    
    try {
      const result= await registerAPI(userData)
    console.log(result);  

    if (result.status==200) {
      toast.success("Registered Successfully")
      navigate('/login')
      setUserData({username:"",email:"",password:""})
      setError({})
      console.log(error);
      
    }
    else{
      if (result.status==406) {
        alert(result.response.data)
        setUserData({username:"",email:"",password:""})
        
        
      }
      
    }
    } catch (error) {
        console.log(error);
    }
    
   
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const validation = validate(userData);
    setError(validation);
  
    if (Object.keys(validation).length > 0) {
      return;
    }
  
    try {
      const result = await loginAPI(userData);
      console.log(result);
  
      if (result.status === 200) {
        setIsLoggedIn(true);
        setTimeout(() => {
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          setIsAuthosided(true);
          setUserData({ username: "", email: "", password: "" });
          setError({});
          navigate("/");
          setIsLoggedIn(false);
        }, 2000);
      } else if (result.status === 401) {
        toast.error("Please activate your account from your registered email");
      } else if (result.status === 404) {
        toast.error("Invalid email/password");
      } else {
        toast.error("Something went wrong, please try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error. Please try again later.");
    }
  };
  
  const fieldEmpty=()=>{
    setUserData({username:"",email:"",password:""})
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
  <div>
    <Form.Control value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="User Name"  className='mb-3'/>
    <div className='text-danger'>{error.username}</div>
  </div>
}       
<div>
<Form.Control value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="Email Address"  className='mb-3'/>
<div className='text-danger'>{error.email}
  </div>  
</div>      
<div>
<Form.Control value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Password"  className='mb-3'/>
<div className='text-danger'>{error.password}</div>
  </div>        {
          insideRegister?
          <div>
            <button onClick={e=>handleRegister(e)} className='btn btn-success w-100  '> Sign Up</button>
            <div>Already have an account?<Link onClick={fieldEmpty} className='ms-1' to={'/login'}>Login</Link></div>
          </div>
          :
          <div>
           <button onClick={(e)=>handleLogin(e)} className='btn btn-success w-100  '> Sign In 
            { isLoggedIn &&
            <Spinner animation="border" />
            }</button>
          <div>Don't have an account?<Link onClick={fieldEmpty} className='ms-1' to={'/register'}>Register</Link></div>
          </div>
        }
        </div>


        </div>

      </div>
    </div>
  )
}

export default Auth