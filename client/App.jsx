import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import UserHomePage from './components/UserHomePage.jsx';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(obj) {
        console.log('obj here', obj);
        this.setState({login:true})
        
        // this.setState({data: [...this.state.data]});
    }
    handleSubmitSignup(obj) {
        console.log(obj);
        // this.setState({login:true})
        
        // this.setState({data: [...this.state.data]});
    }
    render() {
    //   const { data } = this.state;

      if(this.state.login===false) return (
        <div className="router">
        <main>
          <Switch>
            <Route exact path="/" component={()=><Login  handleSubmit={this.handleSubmit} /> } />
            <Route exact path="/Signup"component={()=><Signup handleSubmitSignup={this.handleSubmitSignup} />}/>
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