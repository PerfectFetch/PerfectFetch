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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const { name, value } = event.target;
    this.setState({
        [name] : value
    });
}
  render() {
    const { name, email, password } = this.state;
      return (
        <div>
        
        <div id="container-signup" align="center">
        
        <form onSubmit={ this.props.handleSubmit(this.state)}>
        <h2>SIGNUP</h2>
            <input type="text" name="name" value={name} onChange={this.handleChange}  placeholder="Name" />
            <input type="text" name="email" value={email} onChange={this.handleChange}  placeholder="Email" />
            <input type="password" name="password" value={password} onChange={this.handleChange}  placeholder="Password" />
            <button type="submit">Signup!</button>
            <br /><br />To login go to <Link to={`/`}>Login page</Link>
        </form>
        </div>
        </div>
      );
    }
  }

  export default Signup; 