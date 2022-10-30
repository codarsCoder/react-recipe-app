import { Navigate } from "react-router-dom";
import  {useState, useEffect} from "react"

const Login = () => {
    const [logIn, setLogIn] = useState(false)
    const handleClick = ()=> {
        setLogIn(true)
        
    }
    useEffect(() => {
        <Navigate to="/Home" logIn={logIn}/>
        console.log(logIn)
    }, [logIn])
    
  return (
    <>
     <div>Login</div>
    <button onClick={handleClick}>d</button>
    </>
  )
}

export default Login