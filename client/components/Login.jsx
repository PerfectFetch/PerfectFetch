import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
      const { name, value } = event.target;
      this.setState({
          [name] : value
      });
  }
  render() {
    const { name,  password } = this.state; 
    
    return (
      <div>
      <div id="container-login" align="center">
        <form onSubmit={()=> { this.props.handleSubmit(this.state)
          } }>
        <h2>Login</h2>
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Email" />
          <input type="password" name="password" value={password} onChange={this.handleChange}  placeholder="Password" />
          <button type="submit">Go!</button>
          <br /><br />To register go to <Link to={`/Signup`}>Signup page</Link>
        </form>
      </div>
      </div>
    );
  }
}

export default Login