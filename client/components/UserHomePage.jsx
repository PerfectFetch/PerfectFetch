// this is where the google map, add button, and find button should display
import React, { Component } from 'react';
import WrappedMapWithMarker from './googleMap.jsx';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class UserHomePage extends Component {
  
  // make a request to the database for a store of all the locations that are being used right now

  constructor(props){
    super(props);
    // set up state here, and then prop drill to googleMap component to render additional markers?
    // make a fetch request to the database to get all of the locations that are stored??
    // NOTE: state should be initialized to have only those user objects which are present in the database. The ones below are hard coded to test state change.
    this.state = { 
      locations: [{lat: 40.7580, lng: -73.9855}, {lat: 40.7536, lng: -73.9832}, {lat: 40.7127, lng: -74.0134}],
      information: [['working on React'], ['need help with Redux'], ['need help connecting SQL DB to front-end']],
  };

  }

  
  getUserLocation () {
  
    const promise = new Promise (function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position){
  
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // SEND currentPosition TO THE DATABASE, TO STORE NEW POSITION
        // ADD currentPosition TO THE CACHED LOCATIONS (make an initial request to DB on login for all locations, and then cache these locations. Add new location to this cache.)

        resolve(currentPosition);
        reject('failed to get user current position');

      });

    });

    promise.then((currentPosition)=>{
      const newState = JSON.parse(JSON.stringify(this.state));
      newState.locations.push(currentPosition);
      // add user information about their project
      this.setState(newState);

    })
    .catch(console.error('Promise failed to resolve properly.')
    );
  }
    
    //promise.then(//create new marker on map and send location to database)
  

  componentDidMount(){

    const userPosition = this.getUserLocation();
    console.log('userPosition', userPosition);
// Presently this function is run on 'componentDidMount'. Could create an a function that would be incoked when a button is clicked, and then the user's location is retrieved when they want to add themselves to the map. Should be as simple as creating a handleClick function, binding it, and then incoking it when the ADD button is clicked. Need to talk to Derek and integrate his homePage components with mine. Then we can integrate this function with his ADD component.
// NOTE: Still need to add an information box to each marker.
  }

  render(){
    return(
      // wrapper div for googleMap, add button, find button
      
      <div>
        <div className={'mapContainer'}>
            <div className='googleMap'>
                <WrappedMapWithMarker 
                googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfGA9uSqnTuRHc7V6c0tlEsyZaEBZKFeA&v=3.exp&libraries=geometry,drawing,places'}
                loadingElement={<div style={ {height: '100%'} }/> }
                containerElement={<div style={ {height: '100%'} }/> }
                mapElement={<div style={ {height: '100%'} }/> }
                locationMarkers={this.state.locations} 
                information={this.state.information}
                />
            </div>
        </div>
        <div className={'addFindContainer'}>
          {/* put add and find components here */}
        </div>
      {/* div(s) for add and find components should go here */}

      </div>
    );
  }
  
}

export default UserHomePage;