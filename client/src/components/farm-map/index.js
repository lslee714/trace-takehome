import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { CENTER_OF_US} from "../../constants";

import MapConsumer from './MapConsumer';

import './index.scss';
import FarmMarkersComponent from "../farm-markers";

const FarmMapComponent = () => {
  const [coordinates, setCoordinates] = useState(CENTER_OF_US);

  return (
    <MapContainer className='map-container' center={coordinates} zoom={6} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={coordinates}>
        <Popup>
          Your Location
        </Popup>
      </Marker>
      <FarmMarkersComponent/>
      <MapConsumer setCoordinates={setCoordinates}/>
    </MapContainer>
  );
};

export default FarmMapComponent;
