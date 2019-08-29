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

export default UserContainer; 