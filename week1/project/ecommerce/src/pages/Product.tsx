import { useState } from 'react';
import products from '../fake-data/all-products.js';
import ProductCard from '../components/ProductCard.js';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ProductCategories from '../components/ProductCategories';

export default function Product() {
  const showAll: string = 'all';
  const [category, setCategory] = useState(showAll);

  const filteredProducts =
    category === showAll
      ? products
      : products.filter((product) => {
          return product.category === category;
        });

  const productCards = filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      category={product.category}
      image={product.image}
      rating={product.rating}
    />
  ));

  return (
    <Box>
      <Heading size='lg' mb={5}>
        Products
      </Heading>
      <ProductCategories
        setCategory={setCategory}
        showAll='all'
        currentCategory={category}
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
