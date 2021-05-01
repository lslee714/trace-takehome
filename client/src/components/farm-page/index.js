import FarmMapComponent from "../farm-map";
import FarmStateProvider from "../../state/FarmStateProvider";


const FarmPageComponent = () => {
  return (
    <>
      <FarmStateProvider>
        {/*TODO add controls for filtering*/}
        <FarmMapComponent/>
      </FarmStateProvider>
    </>
  );
};

export default FarmPageComponent;
