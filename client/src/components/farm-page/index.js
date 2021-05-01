import FarmMapComponent from "../farm-map";
import FarmStateProvider from "../../state/FarmStateProvider";


//"Top level" component for the farms page
//Allows us to wrap it in a specific provider
//To better scope out and restrict our state
//Which is a benefit (imo) of context api vs redux
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
