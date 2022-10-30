import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react'
import RouterApp from './components/RouterApp';
import { BrowserRouter, Router } from 'react-router-dom';


function App() {

  const [logIn, setLogIn] = useState(true)
  return (
    <BrowserRouter>
      <Navbar logIn = {logIn} setLogIn = {setLogIn} />
      <RouterApp />
    </BrowserRouter>
    
  );
}

export default App;
