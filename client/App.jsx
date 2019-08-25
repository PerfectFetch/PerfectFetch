import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

  class App extends React.Component {

    constructor(){
        super();
      
        this.handlLogin = this.handleLogin.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }

    componentDidMount(){

    }

    handleLogin(){

    }
    handleSignup(){

    }

    render() {
      return (
        <div className="router">
        <main>
          <Switch>
            <Route exact path="/"
              component={
                () => <Login />
              }
            />
            <Route exact path="/Signup"
              component={
                () => <Signup  />
              }
            />
          </Switch>
        </main>
      </div>
      );
    }
  }
  
  export default App;