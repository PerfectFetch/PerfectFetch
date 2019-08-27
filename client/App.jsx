import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import UserHomePage from './components/UserHomePage.jsx';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          // this flags will allow to render either login or signup components when true
            isLoggedIn: false,
            isSignedUp: false
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    }
    // obj has login information
    handleLoginSubmit(obj, event) {
      event.preventDefault();
      console.log("obj: ", obj)
      // on webpack proxy server bridges port 3000 with port 8080 request
      fetch('http://localhost:3000/db/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .then((data) => {
          if (data.isLoggedIn) {
            this.setState({
            isLoggedIn: true
          })}
        })
    }
    // obj has signup information
    handleSignupSubmit(obj, event) {
      console.log("signupObj: ", obj)
      event.preventDefault();
      console.log("obj: ", obj)
      fetch('http://localhost:3000/db/signup', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .then((data) => {
          if (data.isSignedUp) {
            this.setState({
            isSignedUp: true
          })}
        })
    }

    render() {
      const { data } = this.state;
      // condition to render login component, needs refactoring to redirect from signup component to login after sumbit
      if(this.state.isLoggedIn===false) return (
        <div className="router">
        <main>
          {/* // switch component will render components according with their path */}
          <Switch>
            <Route exact path="/" component={()=><Login  handleLoginSubmit={this.handleLoginSubmit} /> } />
            <Route exact path="/Signup" component={()=><Signup handleSignupSubmit={this.handleSignupSubmit} />}/>
          </Switch>
        </main>
      </div>
      );
      else return (
        <div className="router">
        <main>
          
          <Switch>
            {/* // route component can be used with link component without switch as well */}
            <Route exact path="/" component={()=><UserHomePage /> } />
          </Switch>
        </main>
      </div>
      )
    }
  }
  
  export default App;