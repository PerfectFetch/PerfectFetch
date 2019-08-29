<<<<<<< HEAD
import React, { useState } from 'react'; 
import UserDisplay from '../components/UserDisplay.jsx'; 

const UserContainer = () => {
    const url = 'http://localhost:8080/graphql'; 
    const [ users, setUsers ] = useState([]); 
    // fetch request 
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    })  
    .then(res => res.json())
    .then(
        // Use hooks to push our user data in our database to an empty array 
        // Iterate through that array 
        // For each user data, we render <UserDisplay >
    ); 
}; 
=======
import React from 'react';
import { prependOnceListener } from 'cluster';

const UserContainer = () => {
    const users = [];
    // What triggers getting this info 
    // fetch request 
    fetch('http://localhost:8080/homepage', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < data.length; i += 1) {
            users.push(<UserDisplay
              key={i}
              Name={data.username}
              //! worry about tags later
            />)
          }
        })
    // Use hooks to push our user data in our database to an empty array 
    // Iterate through that array 
    // For each user data, we render <UserDisplay >

};
>>>>>>> 8cb7441ab1821b9e7ec476095b7e9a755d969a0d

export default UserContainer; 