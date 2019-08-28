import React, { useState } from 'react'

const Login = () => {
    const url = 'http://localhost:8080'; 
    // Manage the state using hooks
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    // Email handler to set user email 
    const emailHandler = (e) => {
        const userEmail = e.target.value.trim(); 
        setEmail(userEmail); 
    }; 
    // Password handler to set user password
    const passwordHandler = (e) => {
        // Check if input keycode is 13 
        if (e.keyCode === 13) verifyUserHandler(); 
        // If not, save the input value to our state
        const userPassword = e.target.value.trim(); 
        setPassword(userPassword); 
    }; 
    // POST request handler to server 
    const verifyUserHandler = () => {
        fetch(url, {
          method: 'POST', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
          }, 
          // Include the collected user email and password as body
          body: {
            Email: email,
            Password: password,
          }
        })
        .then(res => res.text())
        .then(res => {
          if (res === true) {
            // Redirect to homepage 
            console.log('Successful. Redirecting to Homepage.')
          } else {
            alert('Incorrect email and/or password. Try again.'); 
          }
        }); 
    }; 
    
    return (
      <div>
        <label>Email: </label><input onChange={(e) => {emailHandler(e)}}></input>
        <label>Password: </label><input onChange={(e) => {passwordHandler(e)}}></input>
        <button onClick={() => {verifyUserHandler()}}>Submit</button>
      </div>
    )
}; 

export default Login; 