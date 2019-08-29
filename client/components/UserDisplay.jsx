import React from 'react'; 

// User Display component for each user 
const UserDisplay = (props) => {
    return (
        <div>
           <p>Username:{props.name}</p> 
           <p>Tags:{props.tags}</p>
        </div>
    )
}; 

export default UserDisplay; 
