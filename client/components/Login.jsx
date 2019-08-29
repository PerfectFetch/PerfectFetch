import React, { useState } from 'react'

const Login = () => {
    const url = 'http://localhost/8080/graphql'; 
    const ENTER_KEY = 13; 
    // State hooks to update the email and password 
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    // Handler to update the user email
    const emailHandler = (e) => {
        const userEmail = e.target.value.trim(); 
        setEmail(userEmail); 
    }; 
    // Handler to update the password state
    const passwordHandler = (e) => {
        // Check to see if user clicked enter key 
        if (e.keyCode == ENTER_KEY) {
          userVerifyHandler(); 
        } else {
          const userPassword = e.target.value.trim(); 
          setPassword(userPassword); 
        }
    }; 
    // Handler to send a post request 
    const userVerifyHandler = () => {
        // Post request to server 
        fetch(url, {
          method: 'POST', 
          mode: 'cors', 
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json', 
          }, 
          body: {
            Email: email, 
            Password: password,
          }
        })
        // Server should send a boolean to determine whether
        // the credentials are correct
        .then(res => res.text())
        .then(res => {
            // Check to see the server response
            if (res === true) {
              console.log('It worked')
              // Render the homepage 
            } else {
              alert('Your credentials are incorrect. Try again.')
            }
        }); 
    }; 
    
    return (
      <div>
        <label>Email:</label><input onChange={(e) => {emailHandler(e)}}></input>
        <label>Password:</label><input onChange={(e) => {passwordHandler(e)}}></input>
        <button onClick={() => {userVerifyHandler()}}>Submit</button>
      </div>
    )
}; 

export default Login; 