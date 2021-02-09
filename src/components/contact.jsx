import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

 
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
      <img width="100%" height="300px" alt="" src= "https://youdesign.co.il/wp-content/uploads/2016/10/contact-us.jpg"/>
      <div className="container">
      <PageHeader titleText="Contact us !" />
      <div className="row">
        <div className="col-12 mt-4">
        </div>
      </div>
      <div className="row">
        <div className="col-12">
      
      <div className="contact">
          <img src="https://static.gotprint.com/tl/en_US/company/contact/img/gp_phone.svg" width="10%" alt="..." className="float-left"/>
          
          
          <div className="row">
          <div className="col-12">
          <h5>Phone</h5>
          </div>
          <div className="row">
          <div className="col-12">
          <p>Telephone: 1 (818) 252-3000</p>
          </div>
        </div>
        </div>
          </div>


          <div className="contact">
          <img src="https://static.gotprint.com/tl/en_US/company/contact/img/gp_call_center.svg" width="10%" alt="..." className="float-left"/>
          
         
          <div className="row">
          <div className="col-12">
            <h5>Call Center Hours</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
             <p>Mon-Fri: 6:00am - 6:00pm PT</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>Sat: 8:00am - 4:00pm PT </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <p>(Excluding Holidays)</p>
          </div>
        </div>
          
                 
          </div>



<div className="contact">
  <img src="https://static.gotprint.com/tl/en_US/company/contact/img/gp_email.svg" width="10%" alt="..." className="float-left"/>

  <div className="row">
  <div className="col-12">
  <h5>Email</h5>
  </div>
</div>
<div className="row">
<div className="col-12">
<p>info@gotprint</p>
</div>
</div>
</div>


  <div className="contact">
  <img src="https://static.gotprint.com/tl/en_US/company/contact/img/gp_fax.svg" width="10%" alt="..." className="float-left"/>
  
  <div className="row">
  <div className="col-12">
  <h5>Fax</h5>
  </div>
</div>
<div className="row">
<div className="col-12">
<p>Fax: 1 (818) 252-3010</p>
</div>
</div>
<div className="row">
<div className="col-12">
<p>Fax for NCOA Forms Only: 1 (818) 252-</p>
</div>
</div>
<div className="row">
<div className="col-12">
<p>3017</p>
</div>
</div>
  
         
  </div>




          
          
        </div>
      </div>
    </div>
      </div>

    );
  }
}
 
export default Contact;

