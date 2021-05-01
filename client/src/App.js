import Container from 'react-bootstrap/Container';



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

      </Container>
    </main>
  );
}

export default App;
