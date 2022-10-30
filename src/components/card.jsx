import React from 'react'

const card = () => {
  return (
    <div className='container mainBack col-7'>
    <div className="row">
 <div className='col-10 text-center m-auto border border-primary mt-5 '><h1>{}</h1></div>
    </div>
    <div className="row">
 <div className=' col-6 text-center m-auto border border-primary mt-1 '>

 </div>
 <div className='col-6 text-center m-auto border border-primary mt-1  '><img className='bRadius' height="200px" width="200px" src={simple} alt="" /></div>
 
    </div>
   
   </div>
  )
}

export default card