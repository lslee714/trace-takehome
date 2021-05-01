import React, { useState, useEffect, useCallback } from 'react';

import FarmStateContext from './FarmStateContext';
import {GET_FARMS_URL} from "../urls";


//provider for farm state context
const FarmStateProvider = (props) => {
  const [farmsState, setFarmsState] = useState({
    farms: {},
  });

  //method to set the farms in state
  const loadFarms = useCallback((farms) => {
    setFarmsState({
      farms
    });
  }, []);

  //method to get farms from API endpoint
  const getFarms = useCallback( async () => {
    const response = await fetch(GET_FARMS_URL);
    const json = await response.json();
    loadFarms(json);
  }, [loadFarms]);

  useEffect(() => {
    if(!Object.keys(farmsState.farms).length) {
      getFarms();
    }
  }, [farmsState.farms, getFarms]);

  return (
    <FarmStateContext.Provider value={
      {
        farms: farmsState.farms,
      }
    }>
      {props.children}
    </FarmStateContext.Provider>
  );
};

export default FarmStateProvider;
