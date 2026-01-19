import React from 'react';
import { NavLink } from 'react-router';

const HOmeCard = ({data}) => {
    let {id,title,coverPhoto,description,ratings,developer} = data
    return (
        <div>
            <div className="card  bg-gradient-to-r from-blue-300 via-blue-500 to white w-96 shadow-sm">
  <figure>
    <img
      src={coverPhoto}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{ratings}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{developer}</div>
      <NavLink to={`card/${id}`}><div className="badge badge-outline bg-blue-500 text-white">See more details</div></NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default HOmeCard;