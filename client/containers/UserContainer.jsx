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

export default UserContainer; 