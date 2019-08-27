import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import React, { Component } from 'react';
import { render } from 'react-dom';

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


const MapWithAMarker = withScriptjs(withGoogleMap((props) => {

  const markersToDisplay = [];

  for (let i = 0; i < props.locationMarkers.length; i += 1){
    markersToDisplay.push(
      <Marker position={props.locationMarkers[i]} key={`marker_${i}`}>
        <InfoWindow
        position={props.locationMarkers[i]}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
        // setVisible={{setVisible: false}}
        // THE ABOVE LINE OF CODE BREAKS EVERYTHING. need to do some research on how to make this info box populate with user data onClick, and disappear at other times.
        key={`infoBox_${i}`}
        >
          <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              {props.information[i]}
            </div>
          </div>
        </InfoWindow>
      </Marker>
    );
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