import React from 'react'

function Footer() {
  return (
    <>
    <div>
    <div className='row bg-dark  text-white p-5 mt-5 '>
      <div className='col-4 d-flex justify-content-center'>
        <div>
          <h3 className='text-light fw-bold'>Project Fair</h3>
          <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, asperiores repudiandae dolores possimus, cum modi quisquam consectetur, error culpa minima ipsa! Error est voluptate alias inventore explicabo amet, obcaecati facilis.</p>

        </div>
      </div>
      <div className='col-lg-4'>
        <div className='row'>
          <div className='col-6'>
            <h4 className='text-light fw-bold'>Links</h4>
            <p>Landing</p>
            <p>Home</p>
            <p>History</p>
          </div>
          <div className='col-lg-6'>
            <h4 className='text-light fw-bold'>Guides</h4>
            <p>React</p>
            <p>React BootstrapReact</p>
            <p>Router</p>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <h4 className='text-light fw-bold'>Contact Us</h4>
        <input className='p-1 me-3 rounded-4 w-75' type="text" name="" id="" placeholder='Enter Email' />
        <button className='btn btn-success rounded-5'><i className="fa-solid fa-right-long"></i></button>
        <div className='row mt-3'>
          <div className='col-2'><i className="fa-brands fa-facebook"></i></div>
          <div className='col-2'><i className="fa-brands fa-twitter"></i></div>
          <div className='col-2'><i className="fa-brands fa-instagram"></i></div>
          <div className='col-2'><i className="fa-brands fa-github"></i></div>
          <div className='col-2'><i className="fa-brands fa-linkedin"></i></div>
          <div className='col-2'><i className="fa-solid fa-phone"></i></div>

        </div>
      </div>
      <div className='mt-4 text-center'>CopyRight <i class="fa-regular fa-copyright"></i> September 2024 Batch,Project Fair,Built with React</div>

    </div>
    </div>
    </>
  )
}

export default Footer