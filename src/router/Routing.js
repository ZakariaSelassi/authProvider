import React from 'react'

import { NavLink, Route, Routes } from 'react-router-dom'
import Home from "../components/Home"
import About from '../components/About'
import Layout from '../Layout/Layout'
import Login from '../components/Login'
const AuthProvider = ({children}) => {
    const isAuthenticated = false
    
    if(!isAuthenticated){
        return <div>
            <h1>You are not authenticated</h1>
            <p>Please login to continue</p>
            <NavLink to="login">Link</NavLink>
        </div>
    }
    return children
}
const Routing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <AuthProvider> <Layout /> </AuthProvider>}>
                <Route index element={ <Home />} />
                <Route path="/about" element={<About />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default Routing