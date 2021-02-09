import React from 'react';

const CardSearch = ({card,addToFav}) => {
  
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
          <a href="/" className="ml-1" onClick={(e)=> addToFav(card._id,e)}><i className="fas fa-heart"></i></a>
        </div>
      </div>
    </div>
   ); 
}
 
export default CardSearch;