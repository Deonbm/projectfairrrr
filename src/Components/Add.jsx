import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img3 from '../images/images-removebg-preview.png'
import { toast } from 'react-toastify';
import { addProjectAPI } from '../../services/allApi';
import { addResponseContext } from '../contexts/ContextAPI';


function Add() {
  const{setAddResponse}=useContext(addResponseContext)
  const[projectDetails,setProjectDetails]=useState({title:"",languages:"",github:"",website:"",overview:"",projectimg:""}) 
  const[imgFileStatus,setImgFileStatus]=useState(false) 
  const[preview,setpreview]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({title:"",languages:"",github:"",website:"",overview:"",projectimg:""})
  }
  const handleShow = () => setShow(true);
  console.log(projectDetails);

  useEffect(() => {
    if (projectDetails.projectimg.type=="image/png" || projectDetails.projectimg.type=="image/jpg"|| projectDetails.projectimg.type=="image/jpeg") {
      setImgFileStatus(true)
      setpreview(URL.createObjectURL(projectDetails.projectimg))
    }
    else{
      setImgFileStatus(false)
      setProjectDetails({...projectDetails,projectimg:""})
      setpreview(img3)
    }
  }, [projectDetails.projectimg])

  const handleAddProject=async()=>{
    const{title,languages,github,website,overview,projectimg}=projectDetails
    if (title && languages && github && website && overview && projectimg) {
      
      // api call

      // req body

      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectimg",projectimg)

     

      // req head

      const token=sessionStorage.getItem("token")
      console.log(token);
      

      if (token) {
        const reqHeader={
          "content-type":"multipart/form-data",
          "authorization":`Bearer ${token}`
        }
       
      // api call
      try {
        const result= await addProjectAPI(reqBody,reqHeader)
      console.log(result); 
      if (result.status==200) {
        setAddResponse(result.data)
        toast.success("Project added successfully")
        handleClose()
      } 
      } catch (error) {
        console.log(result.response.data);
        
      }
      }

      
    }
    else{
      toast.warning("Please fill in the fields completely")
    }
  }
  
  return (
<>
<div onClick={handleShow} className='btn btn-warning fw-bold'>+ New Project</div>
<Modal  
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
          <div className='col-lg-4'>
          <label > <img src={preview} alt="" className='w-100' /><input onChange={e=>setProjectDetails({...projectDetails,projectimg:e.target.files[0]})} className='d-none'  type="file" /></label>
{ !imgFileStatus &&
         <div className='text-warning text-center'>Only input the following file types(jpg,jpeg,png)</div>
}          </div>
          <div className='col-lg-8'>
            <form action="">
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} className='mb-3' type="text" placeholder="Project Title" />
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} className='mb-3' type="text" placeholder="Language Used" />
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} className='mb-3' type="text" placeholder="Project Github Link" />
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} className='mb-3'   type="text" placeholder="Project Website Link" />

            </form>
          </div>
          </div>
          <Form.Control onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} className='mt-3 mb-2' type="text" placeholder="Project Overview" />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
</>
    
  )
}

export default Add