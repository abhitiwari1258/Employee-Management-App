import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Outlet, useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()

    if(!user){
        return <Navigate to="/login" state={{from:location}} replace />
    }

    if(children) return children;
  return (
    <Outlet/>
  )
}

export default RequireAuth
