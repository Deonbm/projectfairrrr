import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import img2 from '../images/istockphoto-1155276971-612x612.jpg'
import server_url from '../../services/server_url';
  

function ProjectCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
  <>
  <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <img style={{width:'20rem'}} src={`${server_url}/uploads/${displayData?.projectimg}`} alt="" />
            </div>
            <div className='col-6 d-flex justify-content-center align-items-center'>
              <div>
              <h4>{displayData?.title}</h4>
              <h6>Language Used: <span className='text-primary'>{displayData?.languages}</span></h6>
              <h6>Project Overview: <span className='text-primary'>{displayData?.overview}</span></h6>

              </div>
            </div>

          </div>
          <div style={{width:'7rem'}} className='d-flex mt-4  justify-content-between'>
          <button className='btn btn-secondary'><i class="fa-brands fa-github"></i></button>
          <button className='btn btn-secondary'><i class="fa-solid fa-link"></i></button>

          </div>
          </Modal.Body>
        
         
        
      </Modal>
  
    <div className='d-flex '>
      <Card onClick={handleShow} style={{ width: '16rem' }} className='overflow-hidden mb-5'>
      <Card.Img style={{height:'16rem'}}  variant="top" src={`${server_url}/uploads/${displayData?.projectimg}`} />
      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
        
      </Card.Body>
    </Card> 
    
    </div>
  </>
  )
}

export default ProjectCard