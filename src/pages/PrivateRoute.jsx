import { Navigate, useLocation, Outlet } from "react-router-dom"

const PrivateRoute = () => {
   const logIn = JSON.parse(localStorage.getItem("recipeApp")); 
   console.log(logIn)
  return (
 
    logIn ? <Outlet/> : <Navigate to="Login"/>
  )
}

export default PrivateRoute