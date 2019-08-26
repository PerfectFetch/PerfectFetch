import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import UserHomePage from './components/UserHomePage.jsx';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            login: true
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    
    handleSubmit(login) {
        console.log('this.state.data here', this.state);
        console.log('login', login);
        
        this.setState({data: [...this.state.data]});
    }
    render() {
      const { data } = this.state;
    //   const login = false
    console.log('data here', data);
    
     Object.values(data).map(val=>{
         if(val==='derek')  this.setState({data:data, login:true})
         else this.setState({data:data, login:false})
     })
      
      console.log('data here in perfect fetch', data); 
      console.log('login here', this.state.login);
       
      

      if(this.state.login===false) return (
        <div className="router">
        <main>
          <Switch>
            <Route exact path="/" component={()=><Login  handleSubmit={this.handleSubmit} /> } />
            <Route exact path="/Signup"component={()=><Signup />}/>
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