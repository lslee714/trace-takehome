import React from 'react';


//Farm State
//Could separate individual context/providers into own "slices" by putting them into directories
//But YAGNI
const FarmStateContext = React.createContext({
  farms: {},
});

export default FarmStateContext;
