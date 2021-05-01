import { useContext } from 'react';
import {Circle, Tooltip} from "react-leaflet";

import {FARM_LOCATIONS} from "../../constants";
import FarmStateContext from "../../state/FarmStateContext";



const FarmMarkersComponent = () => {
  const traceTeal = '#2ec4b2';
  const farmContext = useContext(FarmStateContext);

  //arbitrary number to set the circle size of marker
  const sizeOfMarker = 115000

  return (
    <>
      {
        Object.entries(farmContext.farms).map(
          ([id, farm]) =>
            <Circle key={id} center={{lat: FARM_LOCATIONS[id][0], lon: FARM_LOCATIONS[id][1]}}
              pathOptions={{color: traceTeal}}
              radius={sizeOfMarker}>
              <Tooltip>
                <article className='farm-info'>
                  { farm.name }
                </article>
              </Tooltip>
            </Circle>
        )
      };
    </>
    );
  };

export default FarmMarkersComponent;
