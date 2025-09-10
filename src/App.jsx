import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import './bootstrap.min.css'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/ContextAPI'

function App() {
  // Access authentication context
  const { isAuthosided } = useContext(tokenAuthContext)

  return (
    <>
      {/* Toast notifications */}
      <ToastContainer position="top-right" theme="colored" />

      {/* Define application routes */}
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />

        {/* Protected routes */}
        <Route path='/dashboard' element={isAuthosided ? <Dashboard /> : <Navigate to={'/login'} />} />
        <Route path='/projects' element={isAuthosided ? <Projects /> : <Navigate to={'/login'} />} />
      </Routes>

      {/* Footer component */}
      <Footer />
    </>
  )
}

export default App