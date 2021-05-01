import {useEffect} from 'react';
import {useMap} from "react-leaflet";


const MapConsumer = (props) => {
  const map = useMap();
  const { setCoordinates } = props;

  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition((location) => {
        const coords = location.coords;
        setCoordinates(
          [coords.latitude, coords.longitude]
        );
        map.panTo({lat: coords.latitude, lon: coords.longitude});
      })
    },
    [map, setCoordinates]
  );
  return null;
};

export default MapConsumer;
