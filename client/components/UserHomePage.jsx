// this is where the google map, add button, and find button should display
import React, { Component } from 'react';
import WrappedMapWithMarker from './googleMap.jsx';

class UserHomePage extends Component {
  constructor(props){
    super(props)
  }

  
  // need to figure out why this Promise isn't working correctly; 
  getUserLocation () {
    console.log('console log before declaring promise');
    const promise = new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        console.log('position.coords', position.coords);
        console.log('position.coords.latitude', position.coords.latitude);
  
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // currentPosition.lat = position.coords.latitude;
        // currentPosition.lng = position.coords.longitude;
        console.log('currentPosition obj after setting it inside function', currentPosition);
        console.log('console log immediately prior to resolve in initial promise');
        resolve(currentPosition);

      });


    });

    promise.then((currentPosition)=>{
      console.log('currentPosition in promise.then', currentPosition);
    });
  }
    
    //promise.then(//create new marker on map and send location to database)
  

  componentDidMount(){

// currently the async getUserLocation function is throwing off the timing of events...
    const userPosition = this.getUserLocation();
    console.log('userPosition', userPosition);

  }

  render(){
    return(
      // wrapper div for googleMap, add button, find button
      <div>
        {/* googleMap component */}
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
      {/* div(s) for add and find components should go here */}

      </div>
    );
  }
  
}

export default UserHomePage;