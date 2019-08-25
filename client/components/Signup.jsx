import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    render() {
      return (
        <div>
        
        <div id="container-signup" align="center">
        
        <form>
        <h2>SIGNUP</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Signup!</button>
            <br /><br />To login go to <Link to={`/`}>Login page</Link>
        </form>
        </div>
        </div>
      );
    }
  }

  export default Signup 