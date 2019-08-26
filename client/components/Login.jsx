import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
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
    
    return (
      <div>
      <div id="container-login" align="center">
        <form onSubmit={(event)=> { this.props.handleLoginSubmit(this.state, event)
          } }>
        <h2>Login</h2>
          <input type="text" name="email" onChange={(event) => {this.handleEmailChange(event)}} placeholder="Email" />
          <input type="password" name="password" onChange={(event) => {this.handlePasswordChange(event)}}  placeholder="Password" />
          <button type="submit">Go!</button>
          <br /><br />To register go to <Link to={`/Signup`}>Signup page</Link>
        </form>
      </div>
      </div>
    );
  }
}

export default Login