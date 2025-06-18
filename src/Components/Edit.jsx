import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img3 from '../images/images-removebg-preview.png'
import server_url from '../../services/server_url';
import { toast } from 'react-toastify';
import { updateProjectAPI } from '../../services/allApi';
import { editResponseContext } from '../contexts/ContextAPI';



function Edit({Data}) {
   const[projectDetails,setProjectDetails]=useState({id:Data?._id,title: Data?.title,languages:Data?.languages,github:Data?.github,website:Data?.website,overview:Data?.overview,projectimg:""}) 
    const[imgFileStatus,setImgFileStatus]=useState(false) 
    const{setEditResponse}=useContext(editResponseContext)
    const[preview,setpreview]=useState("")
  const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false);
      setProjectDetails({id:Data?._id,title: Data?.title,languages:Data?.languages,github:Data?.github,website:Data?.website,overview:Data?.overview,projectimg:""})
    }
    const handleShow = () => {
      setProjectDetails({id:Data?._id,title: Data?.title,languages:Data?.languages,github:Data?.github,website:Data?.website,overview:Data?.overview,projectimg:""})

      setShow(true)};
    
    console.log(Data);
-
    useEffect(() => {
        if (projectDetails.projectimg.type=="image/png" || projectDetails.projectimg.type=="image/jpg"|| projectDetails.projectimg.type=="image/jpeg") {
          setImgFileStatus(true)
          setpreview(URL.createObjectURL(projectDetails.projectimg))
        }
        else{
          setImgFileStatus(false)
          setProjectDetails({...projectDetails,projectimg:""})
          setpreview("")
        }
      }, [projectDetails.projectimg])

      const handleUpdate=async()=>{
         const{id,title,languages,github,website,overview,projectimg}=projectDetails
         if (title && languages && website && overview && github) {
          // api call
          const reqBody=new FormData()
          reqBody.append("title",title)
          reqBody.append("languages",languages)
          reqBody.append("github",github)
          reqBody.append("website",website)
          reqBody.append("overview",overview)
          preview? reqBody.append("projectimg",projectDetails.projectimg):reqBody.append("projectimg",Data.projectimg)
          
          const token=sessionStorage.getItem("token")
      console.log(token);
      

      if (token) { 
        const reqHeader={
          "content-type":preview?"multipart/form-data":"application/json",
          "authorization":`Bearer ${token}`
        }
          
        try {
          const result= await updateProjectAPI(id,reqBody,reqHeader)
        console.log(result);
        if (result.status==200) {
          setEditResponse(result.data)
          handleClose()
        }
        } catch (error) {
          console.log(error);
          
        }
        

         }
         
      }else{
        toast.warning('Please fill the form completely')
       }
      }
  return (
<>
<div className='btn' onClick={handleShow}><i class="fa-solid fa-pen-to-square" style={{color:'lightblue'}}></i></div>
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
          <label > <img src={preview?preview:`${server_url}/uploads/${Data.projectimg}`} alt="" className='w-100' /><input onChange={e=>setProjectDetails({...projectDetails,projectimg:e.target.files[0]})} className='d-none'  type="file" /></label>
{ !imgFileStatus &&
         <div className='text-warning text-center'>Only input the following file types(jpg,jpeg,png)</div>
}          </div>
          <div className='col-lg-8'>
            <form action="">
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} className='mb-3' type="text" placeholder="Project Title" value={projectDetails?.title}/>
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} className='mb-3' type="text" placeholder="Language Used" value={projectDetails?.languages }/>
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} className='mb-3' type="text" placeholder="Project Github Link" value={projectDetails?.github}/>
            <Form.Control onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} className='mb-3'   type="text" placeholder="Project Website Link" value={projectDetails?.website}/>

            </form>
          </div>
          </div>
          <Form.Control onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} className='mt-3 mb-2' type="text" placeholder="Project Overview" value={projectDetails?.overview}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}  variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
</>
  )
}


export default Edit