import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Product from './Product';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container centerContent maxW={'7xl'}>
        <Product />
      </Container>
    </ChakraProvider>
  );
}

export default App;
