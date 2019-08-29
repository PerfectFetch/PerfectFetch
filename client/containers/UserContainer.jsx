import React, { useState } from 'react'; 
import UserDisplay from '../components/UserDisplay.jsx'; 

const UserContainer = () => {
    // set our user state
    const [ users, setUsers ] = useState([]); 
    // Query
    let query = 
    `query {
    getUsers
    {
    id
    username
    email
    bio
    zipcode
    tags
    }
    }   
    `
    // fetch request to get all our existing users
    fetch('graphql', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query: query}),
    })  
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err)); 
    // Return the user display 
    return (
        <div className="userContainer">
            {/* Iterate through the user data and inject the values into UserDisplay component */}
            {users.map((item, key) => {
                <UserDisplay 
                    key={key}
                    {item.username}
                    {item.tags}
                />
            })}
        </div>
    )
}; 

export default UserContainer; 