import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Carddetail = () => {
    let card = useLoaderData()
    let {id} =useParams()
      const card1 = card.find(c => c.id === id);
     let {title,coverPhoto,ratings,developer,longDescription,category} = card1
    return (
        <div className=' bg-gradient-to-r from-blue-900 via-blue-500 to white'>

            <div className=' mt-2.5'>  <img
      src={coverPhoto}
      alt="Shoes" />
     <div className="card  w-96  ">
  
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
     <div>
         <h2 className="card-title">Developer: <span className='text-red-600'>{developer}</span></h2>
        <p>Ratings: <span className='text-red-600'>{ratings}</span></p>
     <p>Category: <span className='text-red-600'>{category}</span></p>
    </div>
    
  </div>
</div>
      </div>
           
            
      
     <div className="card card-side  ">
  <figure>
   
  </figure>
  <div className="card-body">
   
   
    <div className="card-actions ">
     <h1>{longDescription}</h1>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Downlode</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Carddetail;