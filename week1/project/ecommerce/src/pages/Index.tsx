import { ChakraProvider, Container } from '@chakra-ui/react';
import Product from './Product';

function App() {
  return (
    <ChakraProvider>
      <Container centerContent maxW={'7xl'}>
        <Product />
      </Container>
    </ChakraProvider>
  );
}

export default App;
