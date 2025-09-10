import React from 'react'

function Footer() {
  return (
    <>
      <div>
        {/* Footer section with three columns */}
        <div className='row bg-dark text-white p-5 mt-5 '>
          {/* Column 1: About Project Fair */}
          <div className='col-4 d-flex justify-content-center'>
            <div>
              <h3 className='text-light fw-bold'>Project Fair</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, asperiores repudiandae dolores possimus, cum modi quisquam consectetur, error culpa minima ipsa! Error est voluptate alias inventore explicabo amet, obcaecati facilis.</p>
            </div>
          </div>

          {/* Column 2: Links and Guides */}
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
                <p>React Bootstrap</p>
                <p>Router</p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className='col-lg-4'>
            <h4 className='text-light fw-bold'>Contact Us</h4>
            <input className='p-1 me-3 rounded-4 w-75' type="text" placeholder='Enter Email' />
            <button className='btn btn-success rounded-5'>
              <i className="fa-solid fa-right-long"></i>
            </button>
            <div className='row mt-3'>
              {/* Social media icons */}
              <div className='col-2'><i className="fa-brands fa-facebook"></i></div>
              <div className='col-2'><i className="fa-brands fa-twitter"></i></div>
              <div className='col-2'><i className="fa-brands fa-instagram"></i></div>
              <div className='col-2'><i className="fa-brands fa-github"></i></div>
              <div className='col-2'><i className="fa-brands fa-linkedin"></i></div>
              <div className='col-2'><i className="fa-solid fa-phone"></i></div>
            </div>
          </div>

          {/* Footer copyright */}
          <div className='mt-4 text-center'>
            CopyRight <i className="fa-regular fa-copyright"></i> September 2024 Batch, Project Fair, Built with React
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer