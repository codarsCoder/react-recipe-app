import React from 'react'
import {useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Details from '../pages/Details'
import Login from '../pages/Login'
import LogOut from '../pages/LogOut'


const RouterApp = () => {

  return (
    <Routes>
     
    <Route path="/Logout" element={<LogOut />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/" element={<Login />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About"  element={<About />} />
    <Route path="/Details"  element={<Details />} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  )
}

export default RouterApp