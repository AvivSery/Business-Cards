import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";
 
class Signin extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };
 
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password")
  };
 
  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/mycards";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
      }
    }
  };
 
  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;
 
    return (


      <div>

      <div className="container">
      <div className="row">
          <div className="col-lg-16">
          <div className="right">
          <div>
          <div className="row">
          <div className="col-lg-16">
          <i className="fab fa-angellist"></i>
          <h6>Faster Checkout</h6>
          <p>Store multiple shipping addresses and payment<br/>options for a faster checkout.</p>

          <i className="fab fa-angellist"></i>
          <h6>Quick & Easy Reorders</h6>
          <p>Running out? Easily order more with a single click.</p>

          <i className="fab fa-angellist"></i>
          <h6>Track Order Status</h6>
          <p>Access your account and track your orders with ease.</p>

          <i className="fab fa-angellist"></i>
          <h6>
          Save Your Designs</h6>
          <p>Don't want to lose your online designs? Save them in<br/>your account.</p>
          </div>
        </div>  
          </div>
          </div>
          </div>
        </div>
      </div>

      <div className="container">
      <PageHeader titleText="Sign in" />
      <div className="row">
        <div className="col-12">
        
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Signin")}
          </form>
        </div>
      </div>
    </div> 
      </div>

    );
  }
}
 
export default Signin;