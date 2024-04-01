import { useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './styles/theme';
import Product from './pages/Product';
import Favorites from './pages/Favorites';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from './pages/Detail';

import { FavoritesContext } from './context/context';

function App() {
  const [favorites, setFavorites] = useState<number[]>([]);

  return (
    <ChakraProvider theme={theme}>
      <Container centerContent maxW={'7xl'}>
        <FavoritesContext.Provider
          value={{ favorites: favorites, action: setFavorites }}
        >
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Product />} />
              <Route path='/product/:id' element={<Detail />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </FavoritesContext.Provider>
      </Container>
    </ChakraProvider>
  );
}

export default App;
