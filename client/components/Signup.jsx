import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleNameChange(event){
    const { value } = event.target;
    event.preventDefault();
    console.log("event.target: ", value)
    this.setState({
        name: value
    });
}

  handleEmailChange(event){
    const { value } = event.target;
    event.preventDefault();
    console.log("event.target: ", value)
    this.setState({
        email: value
    });
}

  handlePasswordChange(event){
    const { value } = event.target;
    event.preventDefault();
    console.log("event.target: ", value)
    this.setState({
        password: value
    });
  }


 
  render() {
    const { name, email, password } = this.state;
      return (
        <div>
        
        <div id="container-signup" align="center">
        
        <form onSubmit={(event) => this.props.handleSignupSubmit(this.state, event)}>
        <h2>SIGNUP</h2>
            <input type="text" name="name" onChange={(event) => this.handleNameChange(event)}  placeholder="Name" />
            <input type="text" name="email" onChange={(event) => this.handleEmailChange(event)}  placeholder="Email" />
            <input type="password" name="password" onChange={(event) => this.handlePasswordChange(event)}  placeholder="Password" />
            <button type="submit">Signup!</button>
            <br /><br />To login go to <Link to={`/`}>Login page</Link>
        </form>
        </div>
        </div>
      );
    }
  }

  export default Signup; 