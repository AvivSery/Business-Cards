import React from 'react';
import {Link} from "react-router-dom";

const Card = ({card,clickDel}) => {
  return ( 
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img width="40%" src={card.bizImage} alt={card.bizName}/>
        <div className="card-body">
          <h5 className="card-title">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Phone: </b>{card.bizPhone} <br/>
            <b>Address: </b>{card.bizAddress} <br/>
            <b>Card Number: </b>{card.bizNumber} <br/>
          </p>
          <Link to={`/my-cards/edit/${card._id}`}>Edit </Link> |
          <a href="/" className="ml-1" onClick={(e)=> clickDel(card._id,e)}>Delete</a>
        </div>
      </div>
    </div>
   ); 
}
 
export default Card;