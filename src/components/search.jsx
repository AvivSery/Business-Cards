import React, { Component } from 'react';
import { Input } from 'mdbreact';
import userService  from "../services/userService";
import Swal from "sweetalert2";
import CardSearch from "./cardSearch";


class Search extends Component {

    state = {
        search : "",
        cards :[],
        favorits: [],
    }
    async componentDidMount(){

        const {data} = await userService.getAllCards();
        const favorits = await userService.getMyFavoriteCards(); 
        if(data.length>0) this.setState({cards:data, favorits : favorits.data});

    }

      handleCardFavorite = async (cardId, e) => {
        e.preventDefault();
        await userService.toggleFavoriteCard(cardId);
        const serviceFavorites = await userService.getMyFavoriteCards();
        this.setState({ favorites: serviceFavorites.data });
        const {favorites} = this.state;
        favorites.map((fav) => {
          if(fav._id === cardId){
            return Swal.fire({
              icon: "success",
              title: "This item has been added to your favorites",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            return Swal.fire({
              icon: "success",
              title: "This item has been removed from your favorites",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        
      };
    onchange = e =>{
        this.setState({ search : e.target.value });
    }

    render() {

        const {cards}=this.state; 
        const {search} = this.state;


        const filteredCards = cards.filter( card =>{
            return card.bizName.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
  
        return (

          <div>
          <img width="100%" height="300px" alt=""
          src= "https://kinsta.com/wp-content/uploads/2019/08/alternative-search-engines.png"/>

          <div className="container">
          <div className="row">
              <div className="col"></div>
              <div className="col">
                  <Input label="Search Card" icon="search" onChange={this.onchange}/>
              </div>
              <div className="col"></div>
          </div>
          
          <div className="row" >
          {
            filteredCards.map( card => (

                <CardSearch key={card._id} card={card} addToFav={this.handleCardFavorite} />
              )
            )        
          } 

        </div>
      </div>    
          </div>

        )
    }
}

export default Search;

