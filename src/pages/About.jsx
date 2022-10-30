import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const {state} = useLocation()

  return (
    <> 
    <div>About</div>
    <div>{state}</div>
    </>
   
  )
}

export default About