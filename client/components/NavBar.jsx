import React from 'react'

const NavBar = () => {
    const url = 'http://localhost:8080/graphql'; 
    // Edit profile handler 
    const editHandler = () => {
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            type: 'application/json'

        })
            .then(res => res.json()) 
            .then(data => displayProfile(data))
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