import React, { useState } from 'react'

const Signup = () => {
  const [ username, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password1, setPassword1 ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const [ zipcode, setZipcode ] = useState('');

  // function that checks whether p1 === p2, if it does send fetch request to store database, otherwise prompt user to make sure their passwords match. Need to also make sure username is not taken already
  const checkUserAndPasswordThenFetch = () => {
    //! first check whether the username hasn't been taken already
    //* SERVER SIDE CHECKS USER
    //! fill this info out when database is up

    if (password1 === password2) {
      fetch('http://localhost:8080/graphql', {
        method: 'POST',
        // including a cors mode prevents any cors issues
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: {
          Email: email,
          Password: password1,
          Zipcode: zipcode
        },
      })
        // getting back a boolean value from the server as to whether the user exists or not
        .then(res => res.text())
        // if this boolean value is true (user info was saved) then redirect user to homepage
        // else ask user to choose a different username
        .then(booleanValueFromServer => {
          if (booleanValueFromServer) {
            //! write code to route user to /homepage 
          } else {
            alert('Please choose a different username, the one you chose already exists!')
            // alert doesn't change the page
          }
        });
      } else {
        alert('Passwords do not match. Please try again.');
        //! if the passwords don't match, user needs to re-fill passwords
    }
  }
  return (
    <div className="signupWrapper">
      <form>
        <div className="signupContainer">
          <label>Email: </label>
          <input
            name='email'
            type="text"
            placeholder='Email'
            onChange={e => setEmail(e.target.value.trim())}
            value={email}
            variant="outlined"
            required />
        </div>
        <div className="signupContainer">
          <label>Password: </label>
          <input
            name="password1"
            type="password"
            placeholder="Password"
            onChange={e => setPassword1(e.target.value.trim())}
            value={password1}
            variant="outlined"
            required />
        </div>
        <div className="signupContainer">
          <label>Re-Enter Password: </label>
          <input
            name="password2"
            type="password"
            placeholder="Re-Enter Password"
            onChange={e => setPassword2(e.target.value.trim())}
            value={password2}
            variant="outlined"
            required />
        </div>
        <div className="signupContainer">
          <label>Zipcode: </label>
          <input
            name="zipcode"
            type="text"
            placeholder="Zipcode"
            onChange={e => setZipcode(e.target.value.trim())}
            value={zipcode}
            variant="outlined"
            required />
        </div>
        <div className="signupContainer">
          <button type="submit" onSubmit={() => checkUserAndPasswordThenFetch()}>Sign Up</button>
        </div>
      </form >
    </div >
  )
};

export default Signup; 