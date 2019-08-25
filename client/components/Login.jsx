import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
      return (
        <div>
        
        <div id="container-login" align="center">
          <form>
          <h2>Login</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Go!</button>
            <br /><br />To register go to <Link to={`/Signup`}>Signup page</Link>
          </form>
        </div>
        </div>
      );
    }
  }

  export default Login