import React, { setState } from 'react';
import { emailLogin } from './Login.jsx';

// NavBar component 
const NavBar = () => {
    const [ savedProfile, setProfile ] = useState([]);
    // Fetches the existing user data from our database to populate our profile page 
    const editHandler = () => {
        fetch('graphql', {
            method: 'POST',
            // mode: 'cors',
            credentials: 'include',
            type: 'application/json',
            body: JSON.stringify({ Email: email })
        })
            //* need to work on code below
            .then(res => res.json())
            .then(res => {
                console.log('data from nav fetch', res.data);
                setProfile(res.data);
                window.href.location = '/editprofile'
            });
    }

    return (
        <div id="navContainer">
            <nav id="navbar">
                <img id="navLogo" src="logo.jpg" />
                <button onClick={ () => editHandler() }></button>
            </nav>
        </div>
    )
};

export const savedProfile = savedProfile;
export default NavBar;


