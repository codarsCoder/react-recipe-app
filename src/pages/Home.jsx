import React from 'react'
import search from '../components/Search'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import bImg from '../assets/back.png'
import Cards from './Cards';


const Home = () => {
 const {state}  = useLocation();
  const navigate = useNavigate();
  localStorage.getItem("recipeApp") || navigate("/Login")
  const id = "307914b7";
  const api_key = "c161ae86451015c9a16d3ef7b30dfa55";
  const [detail, setDetail] = useState([]);
  const [search, setSearch] = useState("")
  const [meal, setMeal] = useState("Breakfast")
  const [load, setLoad] = useState(false)

  const handleSubmit = (e) => {
    setLoad(true)
    e.preventDefault();
    setSearch(e.target.search.value)
    setMeal(e.target.meal.value)
    getData()

  }
  const getData = async () => {
   
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${id}&app_key=${api_key}&mealType=${meal}`;
    const { data } = await axios(url).catch(err=>console.log(err)).finally(()=> setLoad(false));
    setDetail(data.hits)
  }
  // useEffect(() => {
  //   setLoad(true)
  //   state && getData();
  // }, [])
  return (
    <>
     { load && <div className='fs-5 loading'>Loading ...</div>}
      <div style={{backgroundImage:bImg}} className="container">
      <div className="row d-flex justify-content-center align-items-center">
    
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
            <Cards detail = {detail} />
      </div>
     

    </>
  )
}

export default Home