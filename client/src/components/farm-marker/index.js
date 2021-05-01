import { useContext, useEffect, useState } from 'react';
import {Circle, Tooltip} from "react-leaflet";

import { CENTER_OF_STATES } from "../../constants";



const FarmMarkerComponent = (props) => {
  const { farm } = props;
  const traceBlue = '#99dfff';

  //arbitrary number to set the circle size of marker
  const sizeOfMarker = 115000
  const [farmInfo, setFarmInfo] = useState('');

  useEffect(
    () => {
      setFarmInfo(farm.name);
    }, [farm]
  );

  return (
    <Circle center={{lat: CENTER_OF_STATES[farm.state][0], lon: CENTER_OF_STATES[farm.state][1]}}
      pathOptions={{color: traceBlue}}
      radius={sizeOfMarker}>
      <Tooltip>
        <article className='farm-info'>
          { farmInfo }
        </article>
      </Tooltip>
    </Circle>
    );
  };


export default FarmMarkerComponent;
