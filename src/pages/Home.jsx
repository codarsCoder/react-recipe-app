import React from 'react'
import search from '../components/Search'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import bImg from '../assets/back.png'


const Home = ({logIn}) => {

  logIn ?? <Navigate to="/Login" />
  const navigate = useNavigate();
  const id = "307914b7";
  const api_key = "c161ae86451015c9a16d3ef7b30dfa55";
  const [detail, setDetail] = useState([]);
  const [search, setSearch] = useState("")
  const [meal, setMeal] = useState("Breakfast")
  const [login, setLogin] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(false)
    setSearch(e.target.search.value)
    setMeal(e.target.meal.value)
    getData()

  }
  const getData = async () => {
   
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${id}&app_key=${api_key}&mealType=${meal}`;
    const { data } = await axios(url).finally(()=> setLogin(false));
    setDetail(data.hits)
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
   
      <div style={{backgroundImage:bImg}} className="container">
      <div className="row d-flex justify-content-center align-items-center">
      { login && <div>Loading ...</div>}
<form onSubmit={(e) => handleSubmit(e)} className="row g-3 w-100">
        <div className="col-auto">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search"
          />
        </div>
        <div className="col-auto">
          <select className="form-select" name="meal" aria-label="Default select example">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </select>
        </div>
        <div className="col-auto">
          <button  type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
      </div>
    </div>
      
      <div className="container d-flex justify-content-center">
<div className="row">
{detail.map((item, i) => {
        return (
          <div key={i}className="card m-3 p-0" style={{width: 400 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img height="100px" src={item.recipe.image} className="img-fluid rounded-start w-100" alt="..." />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title">{item.recipe.label}</h5>
                <button onClick={()=> navigate('/Details',{state:{item}})} className='btn btn-secondary btn-sm'>Detail</button>
              </div>
            
            </div>
          </div>
        </div>
        )
      })}
</div>
      </div>
     

    </>
  )
}

export default Home