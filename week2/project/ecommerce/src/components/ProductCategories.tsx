import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import '../styles/productCategories.css';
import PageNotFound from '../pages/PageNotFound';

type ProductCategoriesProps = {
  setCategory: (category: string) => void;
  showAll: string;
  selectedCategory: string;
};

export default function ProductCategories({
  setCategory,
  showAll,
  selectedCategory,
}: ProductCategoriesProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      await fetch('https://fakestoreapi.com/products/categories')
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
          setIsLoading(false);
        })
        .catch(() => {
          setError(true);
          setIsLoading(false);
        });
    })();
  }, []);

  if (error) {
    return <PageNotFound />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Button
        id='category_all'
        variant={selectedCategory === showAll ? 'category-active-btn' : ''}
        onClick={(e) => {
          setCategory(showAll);
        }}
        mr={3}
      >
        Show All
      </Button>

      {categories.map((category, index) => (
        <Button
          id={`category_${index}`}
          key={index}
          variant={selectedCategory === category ? 'category-active-btn' : ''}
          onClick={(e) => {
            setCategory(category);
          }}
          my={3}
          mr={3}
        >
          {category}
        </Button>
      ))}
    </>
  );
}
