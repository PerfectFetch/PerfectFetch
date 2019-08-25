import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';
import { render } from 'react-dom';

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const MapWithAMarker = withScriptjs(withGoogleMap(props => 
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 40.719405, lng: -74.001824 }}
    >
      <Marker
        position={{ lat: 40.719405, lng: -74.001824 }}
      />

  </GoogleMap>
));

const WrappedMapWithMarker = MapWithAMarker;

export default WrappedMapWithMarker;