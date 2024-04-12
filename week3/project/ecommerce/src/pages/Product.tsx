import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.js';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ProductCategories from '../components/ProductCategories.js';
import PageNotFound from './PageNotFound.js';
import Navbar from '../components/Navbar.js';
import { Link } from 'react-router-dom';

type Products = {
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

export default function Product() {
  const showAll: string = 'all';
  const [category, setCategory] = useState(showAll);
  const [products, setProducts] = useState([] as Products[]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (category === showAll) {
      (async () => {
        await fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
            setIsLoading(false);
          })
          .catch(() => {
            setError(true);
          });
      })();
    } else {
      (async () => {
        await fetch(`https://fakestoreapi.com/products/category/${category}`)
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
            setIsLoading(false);
          })
          .catch(() => {
            setError(true);
          });
      })();
    }
  }, [category]);

  if (error) {
    return <PageNotFound />;
  }

  const productCards = products.map((product) => (
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

  return (
    <Box>
      <Heading size='lg' mb={5}>
        Products
      </Heading>
      <Navbar pageName={'products'} />
      <ProductCategories
        setCategory={setCategory}
        showAll={showAll}
        selectedCategory={category}
      />
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
