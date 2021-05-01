import Container from 'react-bootstrap/Container';


import FarmPageComponent from "./components/farm-page";
import TraceNavComponent from "./components/nav";

function App() {

  return (
    <main>
      {/*/
        Could have a layout component w/ routing if we really wanted to get fancy but
        This is just going to be a one pager app
      /*/}
      <TraceNavComponent/>
      <Container className='contents'>
        <FarmPageComponent/>
      </Container>
    </main>
  );
}

export default App;
