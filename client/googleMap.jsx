import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React, { Component } from 'react';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 40.712, lng: 74.006 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.712, lng: 74.006 }} />}
  </GoogleMap>
))

<MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfGA9uSqnTuRHc7V6c0tlEsyZaEBZKFeA&callback=initMap"
  loadingElement={<div style={ { height: `100%` } } /> }
  containerElement={<div style={ { height: `400px` } } />}
  mapElement={<div style={ { height: `100%` } } />}
/>

render(){
  return(
    <div>
      <MyMapComponent />
    </div>
  )
};