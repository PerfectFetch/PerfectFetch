import React, { useState } from 'react'

const Login = () => {
  const ENTER_KEY = 13;
  // State hooks to update the email and password 
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');
  // Email handler to set user email 
  const emailHandler = (e) => {
    const userEmail = e.target.value.trim();
    setEmail(userEmail);
  };
  // Password handler to set user password
  const passwordHandler = (e) => {
    // Check if input keycode is 13 
    if (e.keyCode === ENTER_KEY) verifyUserHandler();
    // If not, save the input value to our state
    const userPassword = e.target.value.trim();
    setPassword(userPassword);
  };
  // POST request handler to server 
  const verifyUserHandler = () => {
    // Query details 
    const variables = {
      email: email,
      password: pw,
    };
    const mutation = `mutation ($email: String!, $password: String!) {
                          login(email: $email, password: $password)}`
    // POST request to our server
    fetch('graphql', {
      method: 'POST',
      // mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      // Include the collected user email and password as body
      body: JSON.stringify({ query: mutation, variables: variables }),
    })
      .then(res => res.json())
      .then(res => {
        console.log('data from login fetch', res.data)
        if (res.data) {
          // Redirect to homepage 
          window.href.location = '/homepage';
        } else {
          alert('Incorrect email and/or password. Try again.');
        }
      });
  };

  return (
    <div>
      <label>Email:</label><input onChange={(e) => { emailHandler(e) }}></input>
      <label>Password:</label><input onChange={(e) => { passwordHandler(e) }}></input>
      <button onClick={ () => userVerifyHandler() }>Submit</button>
    </div>
  )
};

export const emailLogin = {
  Email: email
}
export default Login; 