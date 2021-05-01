import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { CENTER_OF_US} from "../../constants";
import FarmStateContext from "../../state/FarmStateContext";

import MapConsumer from './MapConsumer';

import './index.scss';
import FarmMarkerComponent from "../farm-marker";

const FarmMapComponent = () => {
  const [coordinates, setCoordinates] = useState(CENTER_OF_US);
  const farmContext = useContext(FarmStateContext);

  return (
    <MapContainer className='map-container' center={coordinates} zoom={6} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={coordinates}>
        <Popup>
          Your Location
        </Popup>
      </Marker>
      {
        Object.entries(farmContext.farms).map(
          ([id, farm]) => <FarmMarkerComponent farm={farm} key={id}/>
        )
      }
      <MapConsumer setCoordinates={setCoordinates}/>
    </MapContainer>
  );
};

export default FarmMapComponent;
