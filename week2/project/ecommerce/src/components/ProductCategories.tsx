import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import '../styles/ProductCategories.css';
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

  const toggleActive = (element: string, id: string) => {
    const e = document.querySelectorAll(
      `.${element}`
    ) as NodeListOf<HTMLElement>;
    e.forEach((el) => {
      if (el.id === id) {
        el.classList.add('active-btn');
      } else {
        el.classList.remove('active-btn');
      }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Button
        className='category-button active-btn'
        onClick={(e) => {
          const target = e.target as HTMLButtonElement;
          props.setCategory(props.showAll);
          toggleActive('category-button', target.id);
        }}
        mr={3}
      >
        Show All
      </Button>

      {categories.map((category, index) => (
        <Button
          id={`category_${index}`}
          className='category-button'
          key={index}
          onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            props.setCategory(category);
            toggleActive('category-button', target.id);
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
