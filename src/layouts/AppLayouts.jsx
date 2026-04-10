import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const AppLayouts = () => {
  return (
    <div>
      <header style={{background: 'rgb(104,124,144)', color: 'white', padding: '1rem'}}>

        <h1>Welcome to Employee Management</h1>

        <nav style={{marginBottom: '1rem'}}>
          <NavLink to={'/'} 
          style={({isActive})=> ({
            marginRight: '1rem',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'blue' : 'black'
          })}
          >Home</NavLink>

          <NavLink to={'/employees'} 
          style={({isActive})=> ({
            marginRight: '1rem',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'blue' : 'black'
          })}
          >Employee List</NavLink>
          

          <NavLink to={'/about'} 
          style={({isActive})=> ({
            marginRight: '1rem',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'blue' : 'black'
          })}>About</NavLink>

          <NavLink to={'/contact'} 
          style={({isActive})=> ({
            marginRight: '1rem',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'blue' : 'black'
          })}>Contact</NavLink>
        </nav>

      </header>

      <main style={{padding: '1rem'}}>
        <Outlet/>
      </main>
    </div>
  )
}

export default AppLayouts
