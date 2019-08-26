import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';
import { render } from 'react-dom';

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


const MapWithAMarker = withScriptjs(withGoogleMap((props) => {

  const markersToDisplay = [];

  for (let i = 0; i < props.locationMarkers.length; i += 1){
    markersToDisplay.push(<Marker position={props.locationMarkers[i]} key={`marker_${i}`} />);
  }
  
  return(
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 40.719405, lng: -74.001824 }}
      >
       {markersToDisplay}
    </GoogleMap>
  );
}

));

const WrappedMapWithMarker = MapWithAMarker;

export default WrappedMapWithMarker;