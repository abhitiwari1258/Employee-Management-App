import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import AppLayouts from './layouts/AppLayouts'
import EmployeeList from './pages/EmployeeList'
function App() {
  

  return (
    <>
      <div style={{padding:"2rem"}}>

        <Routes>
          <Route path='/' element={<AppLayouts/>}>
            <Route index element={<Home/>}/>
            <Route path='/employees' element={<EmployeeList/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
