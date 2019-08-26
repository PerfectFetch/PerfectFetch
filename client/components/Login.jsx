import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    // console.log(event.target.value);
      console.log('event.target here',event.target.value);
      
      // const { email, value } = event.target;
      // this.setState({
      //     'email' : email,
      //     'password' : password
      // });
  }

  render() {
    const { email,  password } = this.state; 
    
    return (
      <div>
      <div id="container-login" align="center">
        <form onSubmit={()=> { this.props.handleSubmit(this.state)
          } }>
        <h2>Login</h2>
          <input type="text" email="email" value={email} onChange={this.handleChange} placeholder="Email" />
          <input type="password" email="password" value={password} onChange={this.handleChange}  placeholder="Password" />
          <button type="submit">Go!</button>
          <br /><br />To register go to <Link to={`/Signup`}>Signup page</Link>
        </form>
      </div>
      </div>
    );
  }
}

export default Login