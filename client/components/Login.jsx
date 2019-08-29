import React, { useState } from 'react'

const Login = () => {
<<<<<<< HEAD
    const url = 'http://localhost/8080/graphql'; 
    const ENTER_KEY = 13; 
    // State hooks to update the email and password 
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    // Handler to update the user email
=======
<<<<<<< HEAD
    const url = 'http://localhost:8080'; 
    // Manage the state using hooks
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    // Email handler to set user email 
=======
    const url = 'http://localhost/8080'; 
    // State hooks to update the username and password 
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    // Handler to update the email state
>>>>>>> 1c836f4a52791b86b32688956965e5b3f7329537
>>>>>>> dev
    const emailHandler = (e) => {
        const userEmail = e.target.value.trim(); 
        setEmail(userEmail); 
    }; 
<<<<<<< HEAD
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
=======
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
>>>>>>> 1c836f4a52791b86b32688956965e5b3f7329537
        fetch(url, {
          method: 'POST', 
          mode: 'cors', 
          credentials: 'include',
          headers: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 1c836f4a52791b86b32688956965e5b3f7329537
        }); 
    }; 
    
    return (
      <div>
<<<<<<< HEAD
        <label>Email: </label><input onChange={(e) => {emailHandler(e)}}></input>
        <label>Password: </label><input onChange={(e) => {passwordHandler(e)}}></input>
        <button onClick={() => {verifyUserHandler()}}>Submit</button>
=======
        <label>Email:</label><input onChange={(e) => {emailHandler(e)}}></input>
        <label>Password:</label><input onChange={(e) => {passwordHandler(e)}}></input>
        <button onClick={() => {userVerifyHandler()}}>Submit</button>
>>>>>>> 1c836f4a52791b86b32688956965e5b3f7329537
      </div>
    )
}; 

export default Login; 