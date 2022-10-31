import { useNavigate } from 'react-router-dom'




const Cards = ({detail}) => {
    const navigate = useNavigate();
  return (
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
  )
}

export default Cards