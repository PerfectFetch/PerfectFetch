// COMMENTS MADE BY GARETH L.
// the documentation linked below is your best friend and also your enemy. You are officially warned.
// docs: https://tomchentw.github.io/react-google-maps/


// these imports are required. They are higher order components that wrap around the GoogleMap in order to render it correctly...
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import React, { Component } from 'react';
import { render } from 'react-dom';

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

// the logic inside 'MapWithAMarker' is used to display the marker on the map, and the associated InfoWindow
// I have no idea what the options attribute does. But it's in the documentation example. I'm pretty sure you can delete it and it still works..?

// Presently, the InfoWindow displays automatically, and when you click the 'X' to close it, it will not reappear until you refresh the page. Need to implement a way to display the InfoWindow onClick, so you can make it disappear and reappear.

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