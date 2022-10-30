import React from 'react'

const search = () => {
    return (
        <form className="row g-3 m-auto">
      
            <div className="col-auto">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                />
            </div>
            <div className="col-auto">
                <select className="form-select" aria-label="Default select example">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                    <option value="Teatime">Teatime</option>
                </select>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                    Search
                </button>
            </div>
        </form>

    )
}

export default search