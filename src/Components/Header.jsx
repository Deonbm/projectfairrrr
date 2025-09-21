import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../contexts/ContextAPI';

function Header() {
  // Access the authentication context
  const { setIsAuthosided } = useContext(tokenAuthContext)
  const navigate = useNavigate()

  // Logout function to clear session and redirect to the home page
  const logout = () => {
    sessionStorage.clear()
    setIsAuthosided(false)
    navigate('/')
  }

  return (
    <>
      {/* Navbar with a brand and logout button */}
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand >
            <Link className='text-decoration-none text-light' to={'/'}><i className="fa-brands fa-rebel" style={{ color: '#732b2f' }}></i>Project Fair
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Logout button */}
              <Link onClick={logout} to={'/'}>
                <button className='btn btn-danger'>Logout</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    </>
  )
}

export default Header