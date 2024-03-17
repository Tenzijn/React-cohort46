import { useState } from 'react';
import products from '../fake-data/all-products.js';
import ProductCard from '../components/ProductCard.js';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ProductCategories from '../components/ProductCategories.js';

export default function Product() {
  const [category, setCategory] = useState('all');

  return (
    <Box>
      <Heading size='lg' mb={5}>
        Products
      </Heading>
      <ProductCategories
        setCategory={(category) => setCategory(category)}
        showAll='all'
        currentCategory={category}
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        mt={5}
        mb={5}
      >
        {products
          .filter(
            (product) => category === 'all' || category === product.category
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.rating}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
}
