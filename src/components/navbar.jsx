import React, { Component } from "react";
import { NavLink} from "react-router-dom";
 
class Navbar extends Component {
  state = {};


  render() {

    const { user } = this.props;
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm navbar-dark bg-info">

        <div className="navbar-nav ">

        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home"><i className="fa fa-fw fa-home"></i></NavLink>
          </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            {!user && (
              <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  Sign in
                </NavLink>
              </li>
              </React.Fragment>
            )}

        {!user && (
          <React.Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Sign up 
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/bizSignup">
           Biz sign up
          </NavLink>
        </li>
          </React.Fragment>
        )}

        </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                {user  && (
                  <NavLink className="nav-item nav-link" to="/mycards">
                   My Cards
                  </NavLink>
                )}
              </li>   
            </ul>
          </div>  
        </div>
        
          {user && (
            <React.Fragment>
            <ul className="navbar-nav" >
            <NavLink className="nav-link" to="/search"> 
            Search 
            </NavLink>
            </ul>

            <ul className="navbar-nav" >
            <NavLink className="nav-link" to="/favorits"> 
            My Favorits
            </NavLink>
            </ul>
            
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/logout">
                  Log Out
                </NavLink>
              </li>
            
            </ul>
              
            </React.Fragment>
          )}    
      </nav>
    );
  }
}
 
export default Navbar;