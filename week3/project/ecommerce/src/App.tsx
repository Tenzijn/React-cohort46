import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './styles/theme';
import Product from './pages/Product';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container centerContent maxW={'7xl'}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/product/:id' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
