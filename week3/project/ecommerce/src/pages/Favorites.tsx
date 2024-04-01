import { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../context/context';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Favorites() {
  const [favoritesProducts, setFavoritesProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    (async () => {
      const products = await Promise.all(
        favorites.map(async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          return response.json();
        })
      );
      setFavoritesProducts(products);
      setIsLoading(false);
    })();
  }, [favorites]);

  const productCards = favoritesProducts.map((product) => (
    <Link to={`/product/${product.id}`} key={product.id}>
      <ProductCard
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        image={product.image}
        rating={product.rating}
        id={product.id}
      />
    </Link>
  ));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (favorites.length === 0) {
    return (
      <Box>
        <Heading size='lg' mb={5}>
          Favorites
        </Heading>
        <Navbar />
        <Box>No favorites yet</Box>
      </Box>
    );
  }

  return (
    <Box>
      <Heading size='lg' mb={5}>
        Favorites
      </Heading>
      <Navbar />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        mt={5}
        mb={5}
      >
        {productCards}
      </SimpleGrid>
    </Box>
  );
}
