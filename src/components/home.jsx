import React, { Component } from "react";
 
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
      <img width="100%" height="200px" alt="" src= "https://pix.co.il/media/catalog/product/s/c/scodix-business-cards-banner_1.jpg"/>
      <div className="container">
      <div className="row">
        <div className="col-12 mt-4">
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <h3 className="text-center">About the Company</h3>
          <p>In 2001, GotPrint started out as a small family-run business in Toluca Lake, California,
           with a goal that would soon become a tradition: to provide fast, economical, and convenient service without sacrificing quality.
            In no time at all, this steadfast tradition helped us evolve into a continually growing and dependable company.
         Today, GotPrint's headquarters are located in Burbank, California, where four buildings, encompassing about 110,000 square feet, 
         support various departments including Customer Service, Accounting, Processing, Pre-Press, Press, Bindery, Quality Control, Direct Marketing,
         Mailing and Graphic Design.</p>
         <div>
         <img src="https://static.gotprint.com/tl/en_US/company/about-us/images/mission_vision.jpg" alt="..." className="float-right"></img>
         <h3>Our Mission</h3>
         <p>As a family-owned business, we understand what it takes to build a company. We'll work with 
         you to develop, promote, and grow your brand by offering high-quality products that meet your needs and provide great value</p>
         <h3>Our Vision</h3>
         <p>Create innovative print and marketing solutions that are accessible to all</p>
         </div>
        </div>
      </div>
    </div>   
      </div>
      
    );
  }
}
 
export default Home;