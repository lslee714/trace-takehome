import {useEffect} from 'react';
import {useMap} from "react-leaflet";

//Empty component needed to use the navigator stuff within a map to get a user's coordinates
//Cant do it above as it needs to utilize the useMap hook
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
