import React, { Component } from 'react';
import WrappedMapWithMarker from './googleMap.jsx';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";


class App extends Component {

    render(){
        return(
            <div className={'mapContainer'}>
                <div className='googleMap'>
                    <WrappedMapWithMarker 
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfGA9uSqnTuRHc7V6c0tlEsyZaEBZKFeA&v=3.exp&libraries=geometry,drawing,places'}
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