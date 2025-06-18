import React, { useEffect, useState } from 'react'
import img1 from '../images/pro1.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { Button, Card, Modal } from 'react-bootstrap'
import { HomeProjectsAPI } from '../../services/allApi'
import { toast } from 'react-toastify'


function Home() {
  const[homeProjects,sethomeProjects]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
   getHomeProjects()
  }, [])
  


  const getHomeProjects=async()=>{
    try {
      const result= await HomeProjectsAPI()
      console.log(result);
      if (result.status==200) {
        sethomeProjects(result.data)
      }
      
    } catch (error) {
      console.log(error);
      
    }
    
}

const handleProjects=()=>{
  if (sessionStorage.getItem("token")) {
      
    navigate('/projects')
  }
  else{
    toast.warning('Please login to get complete access')
  }
}


  return (
    <div>
      <div className='row'>
      <div className='col-lg-6 d-flex align-items-center'>
        <div className='w-75 mx-auto'>
        <h1 className='mb-3 fw-bold'><i class="fa-brands fa-rebel" style={{color:'#732b2f'}}></i>Project Fair</h1>
<p>One top destination for all software development projects,where user can add and manage thier projects.As well as access all projects available in the website...what are you waiting for!!!</p>

{  sessionStorage.getItem("token") ? 
  <Link to={'/dashboard'}><button className='btn btn-warning mt-3'>MANAGE YOUR PROJECTS</button></Link>:
 <Link to={'/login'}><button className='btn btn-warning mt-3'>START TO EXPLORE</button></Link>
}
        </div>
      </div>
      <div className='col-lg-6 '><img className='w-100 image-fluid' src={img1} alt="" /></div>
      
      </div>
     <div className='mt-5 text-center'>

      <h1 className='my-5 text-warning'>Explore Our Projects</h1>

     <marquee >
     <div className='d-flex'>  
         { homeProjects?.length>0 ?
                  
                homeProjects?.map(item=>(
                  <div className='me-5' >
                  <ProjectCard displayData={item}/> 
             </div> 
                ))

          :
          <div className='text-danger fw-bold'>Projects Not Found</div>
          }
        </div>

      </marquee>
      <button className='btn btn-link' onClick={handleProjects}>Click Here to View More Projects</button>
     </div>
  
  
  
  
         {/* Testimonial */}
  
  
  
  
  <div className='mt-5'>
  <h1 className='text-center text-warning'>Our Testimonials</h1>
  <div className='d-flex justify-content-center align-items-center mt-5' style={{flexWrap:'wrap'}}>
  <Card style={{ width: '18rem',backgroundColor:'rosybrown' }} className='me-5'>
     
      <Card.Body>
        <Card.Title>
          <div className='text-center'>
           <img className='w-50 rounded-circle' src="https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg" alt="" />
          </div>
        </Card.Title>
        <Card.Text>
          <h5 className='text-center'>Ethan Hunt</h5>
         <div className='d-flex justify-content-center'>
         <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
         <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
         <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
         <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
         </div>
         <p className='text-justify mx-auto w-100 ms-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab at aut neque, sit magnam laboriosam veritatis incidunt, facilis nobis aspernatur minus cum et distinctio perferendis dicta ipsum natus autem? Distinctio.</p>

        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',backgroundColor:'rosybrown' }} className='me-5'>
     
     <Card.Body>
       <Card.Title>
         <div className='text-center'>
          <img className='w-50 rounded-circle' src="https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg" alt="" />
         </div>
       </Card.Title>
       <Card.Text>
         <h5 className='text-center'>Ethan Hunt</h5>
        <div className='d-flex justify-content-center'>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        </div>
        <p className='text-justify mx-auto w-100 ms-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab at aut neque, sit magnam laboriosam veritatis incidunt, facilis nobis aspernatur minus cum et distinctio perferendis dicta ipsum natus autem? Distinctio.</p>

       </Card.Text>
     </Card.Body>
   </Card>
   <Card style={{ width: '18rem',backgroundColor:'rosybrown' }} className='me-5'>
     
     <Card.Body>
       <Card.Title>
         <div className='text-center'>
          <img className='w-50 rounded-circle' src="https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg" alt="" />
         </div>
       </Card.Title>
       <Card.Text>
         <h5 className='text-center'>Ethan Hunt</h5>
        <div className='d-flex justify-content-center'>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        <i class="fa-solid fa-star" style={{color:'#FFD43B'}}></i>
        </div>
        <p className='text-justify mx-auto w-100 ms-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab at aut neque, sit magnam laboriosam veritatis incidunt, facilis nobis aspernatur minus cum et distinctio perferendis dicta ipsum natus autem? Distinctio.</p>

       </Card.Text>
     </Card.Body>
   </Card>
  </div>
  </div>
      
    </div>
  )
}

export default Home