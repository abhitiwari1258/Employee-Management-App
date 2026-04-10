import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {NavLink,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  

  return (
    <>
      <div style={{padding:"2rem"}}>
        <h1>Welcome to Employee Management</h1>
        <nav style={{marginBottom: '1rem'}}>
          <NavLink to={'/'} style={{marginBottom: '1rem'}}>Home</NavLink>
          <NavLink to={'/about'} style={{marginBottom: '1rem'}}>About</NavLink>
          <NavLink to={'/contact'} style={{marginBottom: '1rem'}}>Contact</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
