import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import img4 from '../images/proadd-removebg-preview.png'
import server_url from '../../services/server_url';
import { toast } from 'react-toastify/unstyled';
import { updateProfileAPI } from '../../services/allApi';


function Profile() {
  const[userDetails,setuserDetails]=useState({username:"",email:"",password:"",github:"",linkedin:"",profilePic:""})
  const[preview,setpreview]=useState("")
  const[existingImage,setexistingImage]=useState("")
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      let existingUser=JSON.parse(sessionStorage.getItem("user"))
      setuserDetails({...userDetails,username:existingUser?.username,email:existingUser?.email,password:existingUser?.password,
        github:existingUser?.github,linkedin:existingUser?.linkedin})
        setexistingImage(existingUser?.profilePic)
         
    }
    
  
  }, [open])

  useEffect(() => {
    if (userDetails?.profilePic) {
      setpreview(URL.createObjectURL(userDetails.profilePic))
    }
    else{
      setpreview("")
    }
  }, [userDetails.profilePic])
  
  const handleUpdateProfile=async()=>{
    const{username,email,password,github,linkedin,profilePic}=userDetails

    if (github && linkedin) {
      
      const reqBody=new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingImage)

      const token=sessionStorage.getItem("token")
            console.log(token);
            
      
            if (token) {
              const reqHeader={
                "content-type":preview?"multipart/form-data":"application/json",
                "authorization":`Bearer ${token}`
              }
                
              try {
                const result= await updateProfileAPI(reqBody,reqHeader)
                console.log(result);
               if (result.status==200) {
                  setOpen(!open)
                  sessionStorage.setItem("user",JSON.stringify(result.data))
               }
               
              } catch (error) {
                console.log(error);
                
              }
              
      
               }

    }else{
      toast.warning('Enter the field completely')
    }
  }
  
  return (
    <>
    <div className='d-flex justify-content-between'>
      <h4 className='text-success fw-bold'>Profile</h4>
      <button className='btn' 
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
          <i class="fa-solid fa-chevron-down"></i>  
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text d-flex justify-content-end ">
        <label > <input onChange={(e)=>setuserDetails({...userDetails,profilePic:e.target.files[0]})}  className='d-none'  type="file" />
        {
          existingImage?
          <img src={preview?preview:`${server_url}/uploads/${existingImage}`} alt="" className='img-fluid'/>
          :
          <img src={preview?preview:img4} alt="" className='img-fluid' />
        }
        </label>
        <div className='mb-3'>
          <input onChange={(e)=>setuserDetails({...userDetails,github:e.target.value})} type="text" className='form-control' placeholder='Github Link' value={userDetails.github}/>
        </div>
        <div className='mb-3'>
          <input onChange={(e)=>setuserDetails({...userDetails,linkedin:e.target.value})} type="text" className='form-control' placeholder='Linkdin Link' value={userDetails?.linkedin}/>
        </div>
        <button onClick={handleUpdateProfile} className='btn btn-success'>Update Profile</button>
        </div>
        
      </Collapse>
      </div>
    </>
  )
}

export default Profile