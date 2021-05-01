import React, { useState } from 'react';

import FarmStateContext from './FarmStateContext';

const FarmStateProvider = (props) => {
  const [farmsState, setFarmsState] = useState({
    farms: {},
  });

  const loadFarms = (farms) => {
    setFarmsState({
      farms
    });
  };

  return (
    <FarmStateContext.Provider value={
      {
        farms: farmsState.farms,
        loadFarms,
      }
    }>
      {props.children}
    </FarmStateContext.Provider>
  );
};

export default FarmStateProvider;
