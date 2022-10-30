import { Link, NavLink } from "react-router-dom"


const Navbar = ({logIn}) => {
  console.log(logIn,"log");
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3" >
          Recipe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link active" aria-current="page">
                About
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
             { ()=>{
                if({logIn}){
                <NavLink to="/LogOut" className="nav-link active" aria-current="page">
                  Log Out
                </NavLink>
              }else{
                <NavLink to="/LogOut" className="nav-link active" aria-current="page">
                  Log Out
                </NavLink>
              }
             }
           } 


            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
