import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FarmFiltersComponent from "../farm-filters";
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
        <Row className='h-100'>
          <Col sm={4}>
            <FarmFiltersComponent/>
          </Col>
          <Col sm={8}>
            <FarmMapComponent/>
          </Col>
        </Row>
      </FarmStateProvider>
    </>
  );
};

export default FarmPageComponent;
