import React from 'react'

const NavBar = () => {
<<<<<<< HEAD
    const url = 'http://localhost:8080/graphql'; 
    // Edit profile handler 
    const editHandler = () => {
        fetch(url, {
=======
    // Fetch handler here that gets the user data 
    // Makes a get request 

    //trigger onclick event for button
    // set up handler that will fetch user's profile data from database
    // GET request to /editprofile
    // credentials: 'include' (which sends all json, images, etc)
    // no body.... 
    // return a promise

    const editHandler = () => {
        fetch(fullURL, {
>>>>>>> dev
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            type: 'application/json'
<<<<<<< HEAD

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
=======

        })
            .then(res => res.json()) // where data = res.json()
            .then(data => displayProfile(data))
    }

    // 
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

>>>>>>> dev

