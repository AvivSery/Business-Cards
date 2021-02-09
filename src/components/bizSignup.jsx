import React from "react";
import Joi from "joi-browser";
import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import userService from "../services/userService";
import {Redirect} from "react-router-dom";

class BizSignUp extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    data.biz = true;

    try{
      await http.post(`${apiUrl}/users`,data);
      await userService.login(data.email,data.password);
      window.location = '/create-card';
    }catch(ex){
        if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
      }
    }
  };

  render() {

    if(userService.getCurrentUser()) return <Redirect to="/" />

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
      <PageHeader titleText="Business Sign Up" />
      <div className="row">
        <div className="col-12">
          <p>Open a new business account today!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("Next")}
          </form>
        </div>
      </div>
    </div>
      
      </div>

    );
  }
}

export default BizSignUp;