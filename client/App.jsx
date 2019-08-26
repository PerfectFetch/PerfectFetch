import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import UserHomePage from './components/UserHomePage.jsx';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            isSignedUp: false
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    }

    handleLoginSubmit(obj, event) {
      event.preventDefault();
      console.log("obj: ", obj)
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
    
      if(this.state.isLoggedIn===false) return (
        <div className="router">
        <main>
          <Switch>
            <Route exact path="/" component={()=><Login  handleLoginSubmit={this.handleLoginSubmit} /> } />
            <Route exact path="/Signup"component={()=><Signup handleSignupSubmit={this.handleSignupSubmit} />}/>
          </Switch>
        </main>
      </div>
      );
      else return (
        <div className="router">
        <main>
          <Switch>
            <Route exact path="/" component={()=><UserHomePage /> } />
          </Switch>
        </main>
      </div>
      )
    }
  }
  
  export default App;