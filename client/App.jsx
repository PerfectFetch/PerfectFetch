import React, { Component } from 'react';
import WrappedMapWithMarker from './googleMap.jsx';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import UserHomePage from './UserHomePage.jsx';


class App extends Component {

    render(){
        return(
            <div>
            PLACEHOLDER TEXT FOR LOGIN AND SIGNUP
            {/* login / signup goes here */}
            {/* on succesful login, redirect to the home component */}
                <UserHomePage />
            </div>
        );
    }
}

export default App;