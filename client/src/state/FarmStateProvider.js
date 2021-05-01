import React, { useState, useEffect, useCallback } from 'react';

import FarmStateContext from './FarmStateContext';
import {getFarmsUrl} from "../urls";


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
  const getFarms = useCallback( async (nameSearch,  minRevenue, maxRevenue) => {
    const url = getFarmsUrl(nameSearch, minRevenue, maxRevenue);
    const response = await fetch(url);
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
