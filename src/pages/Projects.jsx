import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import img2 from '../images/istockphoto-1155276971-612x612.jpg'
import ProjectCard from '../Components/ProjectCard'
import { AllProjectsAPI } from '../../services/allApi'


function Projects() {
const[searchKey,setSearchKey]=useState("")
const[allProjects,setAllProjects]=useState([])
console.log(allProjects);

useEffect(() => {
  getAllProjects()
},[searchKey])


const getAllProjects=async()=>{
  
  const token=sessionStorage.getItem("token")
  if (token) {
    const reqHeader={
      "content-type":"application/json",
      "authorization":`Bearer ${token}`
    }
  
  try {
    const result= await AllProjectsAPI(searchKey,reqHeader)
  console.log(result);
  setAllProjects(result.data)

  } catch (error) {
    console.log(error);
    
  }
  }
}


  return (
  <>
      <div className='d-flex justify-content-between w-75 mt-5 mx-auto'>
      <h3 className='text-danger'>All Projects</h3>
      <input onChange={(e)=>setSearchKey(e.target.value)} type="text" className='form-control w-25' placeholder='Search project by language'/>
    </div>
<Row className='w-75 mx-auto mt-5'>
{ 
  allProjects?.length>0 ?
  
  allProjects?.map(item=>(
   <Col sm={12} md={6} lg={4}>
    <ProjectCard  displayData={item}/>
   </Col>
  ))
  :
  <div className='text-danger'>Projects Not Found</div>
}

</Row>

  </>
  )
}

export default Projects