import React, { Component } from 'react';
import WrappedMap from './googleMap.jsx';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";


class App extends Component {

    render(){
        return(
            <div>
                <div>
                    hi -- map component below
                </div>
                <div className='googleMap'>
                    <WrappedMap 
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfGA9uSqnTuRHc7V6c0tlEsyZaEBZKFeA'}
                    loadingElement={<div style={ {height: '100%'} }/> }
                    containerElement={<div style={ {height: '100%'} }/> }
                    mapElement={<div style={ {height: '100%'} }/> } 
                    />
                </div>
            </div>

        );
    }
}

export default App;