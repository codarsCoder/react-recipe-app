import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { label, image, totalNutrients, calories, ingredientLines, mealType, cuisineType, dietLabels
    } = state.item.recipe;
    return (
        <div className='container mt-2 p-5 bgColor d-flex justify-content-center'>
            <div className="row">
                <div className="col-md-6 detail bgWhite">
                    <div className="detail1">
                        <img src={image} alt="" />
                    </div>
                    <h1 className='text-center m-2'>{label}</h1>
                    <div className='ingredients mt-3'>
                    <h4>Ingredients</h4>
                        {ingredientLines.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })}
                       
                    </div>
                </div>
                <div className="col-md-6 detail">
                    <div className='detail2'>
                     
                         <h4>Meal Type</h4>
                        {mealType.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })}
                        <h4>Cuisine Type</h4>
                        {cuisineType.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })}
                           <h4>Diet Labels</h4>
                        {dietLabels.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })}
                        <h4>Nutrients</h4>
                        <p>
                            Calcium: {Math.round(totalNutrients?.CA?.quantity)}
                            <small>{totalNutrients?.CA?.unit}</small>
                        </p>
                        <p>
                            Iron: {Math.round(totalNutrients?.FE?.quantity)}
                            <small>{totalNutrients?.FE?.unit}</small>
                        </p>
                        <p>
                            Zinc: {Math.round(totalNutrients?.ZN?.quantity)}
                            <small>{totalNutrients?.ZN?.unit}</small>
                        </p>
                        <p>
                            Carbs: {Math.round(totalNutrients?.CHOCDF?.quantity)}
                            <small>{totalNutrients?.CHOCDF?.unit}</small>
                        </p>
                        <p>
                            Cholesterol: {Math.round(totalNutrients?.CHOLE?.quantity)}
                            <small>{totalNutrients?.CHOLE?.unit}</small>
                        </p>
                        <p>
                            Energy: {Math.round(totalNutrients?.ENERC_KCAL?.quantity)}
                            <small>{totalNutrients?.ENERC_KCAL?.unit}</small>
                        </p>
                        <p>
                            Fat: {Math.round(totalNutrients?.FAT?.quantity)}
                            <small>{totalNutrients?.FAT?.unit}</small>
                        </p>
                        <p>
                            Protein: {Math.round(totalNutrients?.PROCNT?.quantity)}
                            <small>{totalNutrients?.PROCNT?.unit}</small>
                        </p>
                    </div>

                </div>
                
                        
                        <button onClick={()=> navigate(-1)} className="btn btn-link mt-5 fs-5">Go Back</button>
            </div>
        </div>
    )
}

export default Details