import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import React, { Component } from 'react';
import { render } from 'react-dom';

const Map = () => {

return (
  <GoogleMap
  defaultZoom={10}
  center={ { lat: 40.7831, lng: 73.9712} }
  />
);
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;