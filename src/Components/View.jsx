import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteProjectAPI, UserProjectsAPI } from '../../services/allApi'
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI'


function View() {
  const{editResponse}=useContext(editResponseContext)
  const{addResponse}=useContext(addResponseContext)
 const[userProjects,setUserProjects]=useState([])

 useEffect(() => {
   getUserProjects()
 }, [addResponse,editResponse])
 
 const getUserProjects=async()=>{
   
   const token=sessionStorage.getItem("token")
   if (token) {
     const reqHeader={
       "content-type":"application/json",
       "authorization":`Bearer ${token}`
     }
   
   try {
     const result= await UserProjectsAPI(reqHeader)
   console.log(result);
   setUserProjects(result.data)
 
   } catch (error) {
     console.log(error);
     
   }
   }
 }

 const handleDeleteProject=async(pid)=>{
  const token=sessionStorage.getItem("token")
  if (token) {
    const reqHeader={
      "content-type":"application/json",
      "authorization":`Bearer ${token}`
    }
  try {
    const result =await deleteProjectAPI(pid,reqHeader)
     console.log(result);
    if (result.status==200) {
      getUserProjects()

    }     
     
  } catch (error) {
    console.log(error);
    
  }
}
 }

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <h2>All Projects</h2>
         <Add/>
      </div>
     <div className='border border-success'>
     {userProjects?.length>0?
      userProjects?.map(item=>(
        <div className='border d-flex justify-content-between rounded-2 p-2 m-2'>
       <h5>{item?.title}</h5>
       <div className='d-flex align-items-center '>
       <Edit Data={item}/>
       <a href={item?.github}><i className="fa-brands fa-github ms-3 me-3"></i></a>
       <button onClick={()=>handleDeleteProject(item?._id)} className='btn'><i class="fa-solid fa-trash" style={{color:'#e01010'}}></i></button>
       </div>
      </div>
      ))
      :
      <div className='text-danger'>Projects Not Found</div>
      }
     </div>
    </div>
  )
}

export default View