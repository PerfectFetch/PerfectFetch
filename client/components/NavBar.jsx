import React, { setState } from 'react'
// NavBar component 
const NavBar = () => {
    const url = 'http://localhost:8080/graphql'; 
    const [ savedProfile, setProfile ] = useState([]); 
    // Fetches the existing user data from our database to populate our profile page 
    const editHandler = () => {
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            type: 'application/json'
        })
        .then(res => res.json()) 
        .then(data => 
            setProfile(data)
        ); 
    }

    return (
        <div id="navContainer">
            <nav id="navbar">
                <img id="navLogo" src="logo.jpg" />
                <button onClick={() => editHandler()}></button>
            </nav>
        </div>
    )
};

export default NavBar; 


