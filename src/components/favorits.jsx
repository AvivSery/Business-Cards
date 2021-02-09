import { Input } from 'mdbreact';
import CardSearch from "./cardSearch";
import Search from "./search";


class Favoirits extends Search{

    state = {
        search : "",
        cards :[],
        favorits: [],
    }

    render() {

        const {search} = this.state;
        const {favorits} = this.state;
        const filteredFavorits = favorits.filter( favorit =>{
            return favorit.bizName.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
  
        return (

          <div>
          <img width="100%" height="300px" alt=""
           src= "https://lh3.googleusercontent.com/proxy/KXi7wut_Jtagq8gCS0UKaqgiPvrbNj8xJT1yyxzKGrP3HZNiYn5pgzNP79Tl_ZQDfcbQf8qFGecLXyEihXLQYKtOdQo_oQlokUgmGC68dlel8KlUKO702VsjQMVzG5JOQwyY07kRS-A"/>
           
          <div className="container">
          <div className="row">
              <div className="col"></div>
              <div className="col">
                  <Input label="Search Favorit Card" icon="search" onChange={this.onchange}/>
              </div>
              <div className="col"></div>
          </div>
          <div className="row">
          <div className="col-12">
            <p>Below are your favorit's cards:</p>
          </div>
        </div>
          
          <div className="row" >
          {
            filteredFavorits.map( card => (

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

export default Favoirits;


