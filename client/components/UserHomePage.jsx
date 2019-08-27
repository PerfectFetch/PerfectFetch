// COMMENTS MADE BY GARETH L.
// LINK TO DOCS FOR REACT-GOOGLE-MAPS: https://tomchentw.github.io/react-google-maps/
// this is where the google map, add button, and find button should display
import React, { Component } from 'react';
import WrappedMapWithMarker from './googleMap.jsx';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import AddButton from './AddButton.jsx';

// this component renders the Map and the Add button
class UserHomePage extends Component {
  

  constructor(props){
    super(props);
    // NOTE: state should be initialized to have only those user objects which are present in the database. The ones below are hard coded to test state change. A fetch request needs to be set up. The locations and information arrays (i.e. state.locations and state.information) should be initially populated by the information stored in the database. 
    this.state = { 
      locations: [{lat: 40.7580, lng: -73.9855}, {lat: 40.7536, lng: -73.9832}, {lat: 40.7127, lng: -74.0134}],
      information: [['working on React'], ['need help with Redux'], ['need help connecting SQL DB to front-end']],
  };
    this.getUserLocation = this.getUserLocation.bind(this);
    this.updateUserInfoInsideState = this.updateUserInfoInsideState.bind(this);
  }


  componentWillMount(){
    // this fetch request DOES NOT WORK. It is not properly connected to the database. This fetch request may need to live elsewhere (perhaps in the constructor, above?). 

    // fetch request to get user location and messages, in order to populate map on initial login
  fetch('http://localhost:3000/db/getAllInfo')
  .then((res)=>res.json)
  .then((myObj)=>{console.log(myObj);})
  .catch('there was an error with your fetch request');
  }


  getUserLocation (userInput) {
  //navigator.geolocation.getCurrentPosition is a native JS API call. It is asynchronous, which is why it takes some time for a new marker to display on the map.
      navigator.geolocation.getCurrentPosition((position)=>{
  
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.updateUserInfoInsideState(userInput, currentPosition);


      });
    }
    // updateUserInfoInsideState is a helper method that updates state AFTER the user location and message have been retrieved.
    updateUserInfoInsideState(userInput, currentPosition){
      // deep clone state in order to add the new location and information into the state object
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.locations.push(currentPosition);
        newState.information.push([userInput]);
        this.setState(newState);

        // Once the user location and message have been acquired, need to send them to the database to be stored. The below code block *might* work for this. But it might not. Need to implement some way of storing new location and message into the database.
        // =======
          // send location and message to the database to be stored
          // fetch('http://localhost:3000/db/', {
          //   method: 'POST',
          //   body: JSON.stringify({
          //     latitude: currentPosition.lat,
          //     longitude: currentPosition.lng,
          //     message: userInput,
          //   }),
          // })
      // ==========

    }
    
  render(){
    // A NOTE ON the WrappedMapWithMarker component below:
    //  this is a higher order component, derived from react-google-maps. I don't really understand how it's created or how it works. The googleMapURL utilizes Gareth's googleMapsAPI key. The following attributes are straight from the examples in the documentation: googleMapURL, loadingElement, containerElement, mapElement.
    // locationMarkers and information are attributes Gareth created in order to pass down state info to the Marker component, rendered in googleMap.jsx
    return(
      // wrapper div for googleMap and addButton
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
          <AddButton 
          getUserLocation={this.getUserLocation}
          />
        </div>
      </div>
    );
  }
  
}

export default UserHomePage;