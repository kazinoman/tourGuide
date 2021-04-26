import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import { Auth0Context } from "./react-auth0-spa";
import history from "./utils/history";
import "./App.css";
import Home from '../src/components/TourCom/Tour';
import About from '../src/components/about/About';
import AnsAndQuestion from '../src/components/AnsAndQuestion/Q&A';
import Contact from '../src/components/contact/Contact';
import Footer from '../src/components/footer/Footer';
import TourDetails from '../src/components/TourCom/TourDetails';
import Gallery from '../src/components/Gallery/Gallery';

class App extends Component {
  static contextType = Auth0Context;

  

  render() {
    const { loading } = this.context;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      
      <div className="App">
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/ansandquestion" exact component={AnsAndQuestion}/>
            <Route path="/tour/:slug" exact  component={TourDetails}/>
            <Route path="/gallery" exact  component={Gallery}/>
            <PrivateRoute path="/profile" exact component={Profile} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
