import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import '../styles/productCategories.css';
import PageNotFound from '../pages/PageNotFound';

type ProductCategoriesProps = {
  currentCategory: string;
  setCategory: (category: string) => void;
  showAll: string;
};

export default function ProductCategories(props: ProductCategoriesProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeBtn, setActiveBtn] = useState<HTMLElement>();

  useEffect(() => {
    setActiveBtn(document.querySelector('#category_all') as HTMLElement);
  }, []);

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
        variant={
          activeBtn === document.querySelector('#category_all')
            ? 'category-active-btn'
            : ''
        }
        onClick={(e) => {
          const target = e.target as HTMLButtonElement;
          props.setCategory(props.showAll);
          setActiveBtn(target);
        }}
        mr={3}
      >
        Show All
      </Button>

      {categories.map((category, index) => (
        <Button
          id={`category_${index}`}
          key={index}
          variant={
            activeBtn === document.querySelector(`#category_${index}`)
              ? 'category-active-btn'
              : ''
          }
          onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            props.setCategory(category);
            setActiveBtn(target);
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
