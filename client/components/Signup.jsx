import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.initialState = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.state = this.initialState;  
  }

  handleChange(event){
    const { name, value } = event.target;

    this.setState({
        [name] : value
    });
}

onFormSubmit(event){
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);

}
  render() {

    const { name, email, password } = this.state
      return (
        <div>
        
        <div id="container-signup" align="center">
        
        <form onSubmit={this.onFormSubmit}>
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

  export default Signup 