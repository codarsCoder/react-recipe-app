import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Details from '../pages/Details'

const RouterApp = () => {
  return (
    <Routes>
    {/* <Route path="/logout" element={<Navigate to={"/login"} />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/About"  element={<About />} />
    <Route path="/Details"  element={<Details />} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  )
}

export default RouterApp