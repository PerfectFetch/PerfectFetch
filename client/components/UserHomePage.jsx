// this is where the google map, add button, and find button should display
import React, { Component } from 'react';
import WrappedMapWithMarker from './googleMap.jsx';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import AddButton from './AddButton.jsx';

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
    this.getUserLocation = this.getUserLocation.bind(this);
    this.updateUserInfoInsideState = this.updateUserInfoInsideState.bind(this);
    // this.getUserInformation = this.getUserInformation.bind(this);
  }

  componentWillMount(){
    // fetch request to get user location an dmessages to populate map
  fetch('http://localhost:3000/db/getAllInfo')
  .then((res)=>res.json)
  .then((myObj)=>{console.log(myObj);})
  .catch('there was an error with your fetch request');
  }

  getUserLocation (userInput) {
  
    // const promise = new Promise (function(resolve, reject){
      navigator.geolocation.getCurrentPosition((position)=>{
  
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.updateUserInfoInsideState(userInput, currentPosition);


      });
    }

    updateUserInfoInsideState(userInput, currentPosition){
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.locations.push(currentPosition);
        newState.information.push([userInput]);
        this.setState(newState);

          // send location and message to the database to be stored
          // fetch('http://localhost:3000/db/', {
          //   method: 'POST',
          //   body: JSON.stringify({
          //     latitude: currentPosition.lat,
          //     longitude: currentPosition.lng,
          //     message: userInput,
          //   }),
          // })

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
          <AddButton 
          getUserLocation={this.getUserLocation}
          />
          {/* <findButton /> */}
        </div>
      </div>
    );
  }
  
}

export default UserHomePage;