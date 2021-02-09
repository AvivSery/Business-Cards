import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Logout from "./components/logout";
import BizSignup from "./components/bizSignup";
import CreateCard from "./components/createCard";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "./services/userService";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import EditCard from "./components/editCard";
import Search from "./components/search";
import Favorits from "./components/favorits";
 
class App extends Component {
  state = {};
 
  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }
 
  render() {
    const { user } = this.state;
 
    return (
      <React.Fragment>
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        <main style={{ minHeight: 900 }}>
          <Switch>
          <ProtectedRoute path="/my-cards/edit/:id" component={EditCard} />
          <ProtectedRoute path="/myCards" component={MyCards} />
          <ProtectedRoute path="/search" component={Search} />
          <ProtectedRoute path="/favorits" component={Favorits} />
          <ProtectedRoute path="/create-card" component={CreateCard}  />
          <Route path="/bizSignup" component={BizSignup} />
          <Route path="/logout" component={Logout} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}
 
export default App;
