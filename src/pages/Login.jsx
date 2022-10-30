import { Navigate, useNavigate } from "react-router-dom";
import  {useState, useEffect} from "react"

const Login = () => {
   const navigate = useNavigate();
    const [logIn, setLogIn] = useState(false)
 
    useEffect(() => {
        !logIn && navigate("/Home",{state:true})
    }, [])
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        setLogIn(true);
        navigate("/Home",{state:true})
    }  
  return (
    <>
   <form onSubmit={(e)=> handleSubmit(e)} className="login-form">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

   
    </>
  )
}

export default Login