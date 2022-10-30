import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react'
import RouterApp from './components/RouterApp';
import { BrowserRouter, Router, Navigate } from 'react-router-dom';


function App() {


 
  return (
    <BrowserRouter>
      <Navbar />
      <RouterApp />
    </BrowserRouter>
    
  );
}

export default App;
